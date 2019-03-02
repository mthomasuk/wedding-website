
CREATE TABLE family (
    id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE guests (
    id uuid NOT NULL,
    key text NOT NULL,
    name text NOT NULL,
    address text,
    song_choice text,
    confirmed_attendance boolean,
    type_of_guest text DEFAULT 'ceremony'::text NOT NULL,
    food_choices json,
    allergy_info text,
    family_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE ONLY family
    ADD CONSTRAINT family_pkey PRIMARY KEY (id);

ALTER TABLE ONLY guests
    ADD CONSTRAINT guests_pkey PRIMARY KEY (id);

ALTER TABLE ONLY guests
    ADD CONSTRAINT guests_family_id_fkey FOREIGN KEY (family_id) REFERENCES family(id);

