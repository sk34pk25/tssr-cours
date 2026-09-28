"""Real Poppler parser on a synthetic PDF; no Drive/network/source document."""
import os
from pathlib import Path
import sys
import unittest
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/"scripts"))
from ingestion.extract import extract


def synthetic_pdf():
    stream=b"BT /F1 12 Tf 40 120 Td (Synthetic IPv4 lesson) Tj ET"
    objects=[b"<< /Type /Catalog /Pages 2 0 R >>",
             b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
             b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 200 200] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
             b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
             b"<< /Length "+str(len(stream)).encode()+b" >>\nstream\n"+stream+b"\nendstream"]
    data=b"%PDF-1.4\n"
    offsets=[0]
    for i,obj in enumerate(objects,1):
        offsets.append(len(data))
        data+=str(i).encode()+b" 0 obj\n"+obj+b"\nendobj\n"
    xref=len(data)
    data+=b"xref\n0 6\n0000000000 65535 f \n"
    data+=b"".join(f"{offset:010} 00000 n \n".encode() for offset in offsets[1:])
    return data+b"trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n"+str(xref).encode()+b"\n%%EOF\n"


class PdfTests(unittest.TestCase):
    def test_real_pdf_positions_and_visual_review(self):
        result=extract(synthetic_pdf(),"application/pdf",pdftotext=os.environ.get("PDFTOTEXT_BIN"))
        self.assertIn("Synthetic IPv4 lesson",result["fragments"][0]["text"])
        self.assertEqual(result["fragments"][0]["position"],{"page":1})
        self.assertFalse(result["complete"])
        self.assertIn("PDF_VISUAL_REVIEW_REQUIRED",result["warnings"])


if __name__=="__main__":
    unittest.main()
