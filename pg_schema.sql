CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE family (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    gift_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE guests (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    key text NOT NULL,
    name text NOT NULL,
    address text,
    song_choice text,
    confirmed_attendance boolean,
    type_of_guest text DEFAULT 'ceremony'::text NOT NULL,
    food_choices json,
    allergy_info text,
    song_choices json,
    family_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE gifts (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    title text,
    subtitle text,
    category text,
    value int,
    quantity float,
    link text,
    img_src text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE ONLY family
    ADD CONSTRAINT family_pkey PRIMARY KEY (id);

ALTER TABLE ONLY guests
    ADD CONSTRAINT guests_pkey PRIMARY KEY (id);

ALTER TABLE ONLY gifts
    ADD CONSTRAINT gifts_pkey PRIMARY KEY (id);

ALTER TABLE ONLY guests
    ADD CONSTRAINT guests_family_id_fkey FOREIGN KEY (family_id) REFERENCES family(id);

ALTER TABLE ONLY family
    ADD CONSTRAINT family_gift_id_fkey FOREIGN KEY (gift_id) REFERENCES gift(id);

-- COPY gifts(title, subtitle, category, value, quantity, link, img_src)
-- FROM '/Users/markthomas/Projects/wedding-website/gifts.csv' DELIMITER ',' CSV;
