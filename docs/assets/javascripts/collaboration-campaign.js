/* Frozen membership of the abandoned Debian campaign; not a status or access-control rule. */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.TSSRLegacyCampaign = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  // Reviewed on 2026-10-05: exact UUIDs, titles, dates, AGENT provenance and target paths.
  // Never infer membership from future titles, authors, statuses or file paths.
  const ids = Object.freeze([
    "248577dd-f538-4b1f-a81e-f4dd7a57d3a1",
    "217c451c-fce9-42fd-a638-5658d1f39d43",
    "3093c8a4-73ed-48e5-b57c-3cb75cb1d967",
    "8ee9f018-0cd9-4b51-9cc4-611318801732",
    "78eec129-0b7d-4d10-aa68-c536649bdbc3",
    "94e0c983-8c6a-4522-a90c-a2104a077006",
    "756328d8-b6d6-498f-8982-b2007395b775",
    "79f08e56-2bcc-41f7-ba17-2638459c4394",
    "181683c9-d458-4915-8d86-0f0637149071",
    "88e00dc4-b8ca-4c95-b7c2-ec92c9032c32",
    "c950a4dd-c602-4a8a-b64a-b8cc25bf9bc4",
    "5a068b3a-526c-4784-9f83-d25e1a51f798",
    "962b2ec8-abde-447f-b822-e0ba3c715ed4",
    "17ec894a-8820-4dc5-a2dd-2935cde71640",
    "7bd82478-89b5-4329-ae65-bdd5531c6028",
    "a62e6a73-9990-4b6b-a218-72d2c29019e7",
    "4b4bf933-a362-4ddf-8bd5-b6e54fae052b",
    "c47dc0c7-4e08-4145-9faf-1df2f154d0a7",
    "948d3274-4063-43e2-b651-77ed3e78dcfa",
    "e9b2acfb-56c5-4d0d-9d1a-ee7eacf241f9",
    "5767a535-2c73-48da-8ddf-c271fa69f2ef",
    "fccba715-752a-4982-9865-f7807def7df4",
    "b2053e7d-a4dc-4870-81c1-f941f06f5fda",
    "082bb997-d121-4a17-91c0-e51fab70992d",
    "e0693450-e72d-4e3e-a79f-8298da781589",
    "d3046cc0-b4f7-40ea-aadd-684cd814bda0",
    "9eed7665-ed86-424f-8a85-bb77589d015b",
    "37bf9acd-9788-4448-ad71-2ef94d70b77f",
    "32f5341a-7b13-46ed-be11-4ed71f84e554",
    "22163669-b1fd-4f53-9201-86d3e85a3401",
    "b828b43d-063c-43cd-9efd-a3029622bce1",
    "ac75c705-ab8d-4085-8e36-22f6c4f27274",
    "d9b4f4ba-bc5b-423d-8cb4-b4920cd3c973",
    "aa1a1bd6-8da6-42ad-916e-d461df5202c5",
    "8cd26050-6907-42f1-9268-b083f53ed2d7",
    "30a7a838-b56a-4def-8a95-1c62d9d969b7",
    "763cde4a-998c-46dc-949d-dfb6913927de",
    "f3ca4432-8be6-409c-93d4-06a1d0bdc09c",
    "64fa8dba-b256-4a70-b0b0-fe44e50e9acc",
    "e6569b78-6c8f-4249-8e16-8f07b16b0c9b",
    "77d4f22f-ac5b-426a-93db-df7f91f83f53",
    "b0545b0e-d4c5-49d5-8c67-8013d45e8283",
    "9d6a5f93-967e-4826-82ef-10c8c16e3ce9",
    "2045a287-8c95-4273-ac31-266421d136db",
    "4e2ed56f-7931-4939-a264-23bc638ab192",
    "7e61d34b-bcbf-48ee-99d8-99d595838374",
    "21ed4a50-1004-4ede-914c-25490e09a4b8",
    "2904b693-228b-4296-b750-f487ab5255e8",
    "96625e97-76c3-4c8e-b5c9-60af8f49945d",
    "91f85cac-0516-4095-af1e-6a1b1655d0fa",
    "08c1ea6b-a386-4d77-b98d-6c4622f8aa5a",
    "12ca60da-d25f-4c61-a565-63b7c6bde075",
    "28c0789a-04f3-4341-a919-2ac7c6424d9e",
    "44ababfa-cf90-46c1-bb71-07dcdaa96b00",
    "a9985e57-87fe-4a93-b5e3-d363f4634e26",
    "b4fc32da-3cb9-4d0b-b81c-8df7961d4954",
    "0060152d-aa4e-4ef1-ab87-cda4b4730fcb",
    "140e7276-f8d9-4bf8-a0d4-20afe90d5bfe",
    "869dc700-4a5e-4c9f-89b2-fb521decc663",
    "62a0d589-3137-4a13-823d-678f13030ec0",
    "3146bf84-5254-48b2-b8f1-1c6b39757afc",
    "3c56fa49-f4ab-4926-bb4e-b090aa743fad",
    "854fb2d2-5b3a-43f8-bbe7-7c6a500cd7be",
    "c8af0b1e-92bb-4af7-820c-c31996931f7d",
  ]);
  const membership = new Set(ids);
  const exclusion = `(${ids.join(",")})`;

  function scope(query, historical = false) {
    // These are PostgREST filters executed by Supabase BEFORE rows are returned.
    // No CSS hiding or download-all-then-filter fallback.
    return historical ? query.in("id", ids) : query.not("id", "in", exclusion);
  }

  return Object.freeze({ id: "debian-legacy-2026-10-05", ids, scope,
    contains: (id) => membership.has(id) });
});
