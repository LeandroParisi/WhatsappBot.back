--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Ubuntu 13.4-1.pgdg20.04+1)
-- Dumped by pg_dump version 13.4 (Ubuntu 13.4-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: enum_coupons_discount_type; Type: TYPE; Schema: public; Owner: leandro_parisi
--

CREATE TYPE public.enum_coupons_discount_type AS ENUM (
    'percentage',
    'absolute_value'
);


ALTER TYPE public.enum_coupons_discount_type OWNER TO leandro_parisi;

--
-- Name: enum_delivery_types_delivery_type; Type: TYPE; Schema: public; Owner: leandro_parisi
--

CREATE TYPE public.enum_delivery_types_delivery_type AS ENUM (
    'delivery',
    'counter_pickup',
    'on_spot_consumption'
);


ALTER TYPE public.enum_delivery_types_delivery_type OWNER TO leandro_parisi;

--
-- Name: enum_users_role; Type: TYPE; Schema: public; Owner: leandro_parisi
--

CREATE TYPE public.enum_users_role AS ENUM (
    'admin',
    'user'
);


ALTER TYPE public.enum_users_role OWNER TO leandro_parisi;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO leandro_parisi;

--
-- Name: branches; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.branches (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    whatsapp_number character varying(255) NOT NULL,
    whatsapp_id character varying(255),
    manager_name character varying(255) NOT NULL,
    branch_name character varying(255) NOT NULL,
    country_id integer NOT NULL,
    state_id integer NOT NULL,
    city_id integer NOT NULL,
    neighborhood character varying(255) NOT NULL,
    street character varying(255) NOT NULL,
    street_number character varying(255) NOT NULL,
    street_complement character varying(255) NOT NULL,
    postal_code character varying(255) NOT NULL,
    lat numeric(17,15) NOT NULL,
    lng numeric(19,15) NOT NULL,
    delivery_fees jsonb NOT NULL,
    logo character varying(255),
    is_active boolean DEFAULT true NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.branches OWNER TO leandro_parisi;

--
-- Name: branches_delivery_types; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.branches_delivery_types (
    id integer NOT NULL,
    branch_id uuid NOT NULL,
    delivery_type_id integer NOT NULL
);


ALTER TABLE public.branches_delivery_types OWNER TO leandro_parisi;

--
-- Name: branches_delivery_types_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.branches_delivery_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.branches_delivery_types_id_seq OWNER TO leandro_parisi;

--
-- Name: branches_delivery_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.branches_delivery_types_id_seq OWNED BY public.branches_delivery_types.id;


--
-- Name: branches_menus; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.branches_menus (
    id integer NOT NULL,
    branch_id uuid NOT NULL,
    menu_id uuid NOT NULL
);


ALTER TABLE public.branches_menus OWNER TO leandro_parisi;

--
-- Name: branches_menus_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.branches_menus_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.branches_menus_id_seq OWNER TO leandro_parisi;

--
-- Name: branches_menus_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.branches_menus_id_seq OWNED BY public.branches_menus.id;


--
-- Name: branches_payment_methods; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.branches_payment_methods (
    id integer NOT NULL,
    branch_id uuid NOT NULL,
    payment_method_id integer NOT NULL
);


ALTER TABLE public.branches_payment_methods OWNER TO leandro_parisi;

--
-- Name: branches_payment_methods_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.branches_payment_methods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.branches_payment_methods_id_seq OWNER TO leandro_parisi;

--
-- Name: branches_payment_methods_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.branches_payment_methods_id_seq OWNED BY public.branches_payment_methods.id;


--
-- Name: branches_products; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.branches_products (
    id integer NOT NULL,
    branch_id uuid NOT NULL,
    product_id uuid NOT NULL
);


ALTER TABLE public.branches_products OWNER TO leandro_parisi;

--
-- Name: branches_products_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.branches_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.branches_products_id_seq OWNER TO leandro_parisi;

--
-- Name: branches_products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.branches_products_id_seq OWNED BY public.branches_products.id;


--
-- Name: branches_promotions; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.branches_promotions (
    id integer NOT NULL,
    branch_id uuid NOT NULL,
    promotion_id integer NOT NULL
);


ALTER TABLE public.branches_promotions OWNER TO leandro_parisi;

--
-- Name: branches_promotions_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.branches_promotions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.branches_promotions_id_seq OWNER TO leandro_parisi;

--
-- Name: branches_promotions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.branches_promotions_id_seq OWNED BY public.branches_promotions.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    category_name character varying(255) NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.categories OWNER TO leandro_parisi;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO leandro_parisi;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: cities; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.cities (
    id integer NOT NULL,
    city_name character varying(255) NOT NULL,
    state_id integer NOT NULL
);


ALTER TABLE public.cities OWNER TO leandro_parisi;

--
-- Name: cities_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cities_id_seq OWNER TO leandro_parisi;

--
-- Name: cities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.cities_id_seq OWNED BY public.cities.id;


--
-- Name: conditions; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.conditions (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.conditions OWNER TO leandro_parisi;

--
-- Name: conditions_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.conditions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.conditions_id_seq OWNER TO leandro_parisi;

--
-- Name: conditions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.conditions_id_seq OWNED BY public.conditions.id;


--
-- Name: countries; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.countries (
    id integer NOT NULL,
    country_name character varying(255) NOT NULL
);


ALTER TABLE public.countries OWNER TO leandro_parisi;

--
-- Name: countries_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.countries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.countries_id_seq OWNER TO leandro_parisi;

--
-- Name: countries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.countries_id_seq OWNED BY public.countries.id;


--
-- Name: coupons; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.coupons (
    id integer NOT NULL,
    coupom_code character varying(255) NOT NULL,
    discount_type public.enum_coupons_discount_type NOT NULL,
    discount numeric(10,2) NOT NULL,
    used integer DEFAULT 0,
    price_limit numeric(10,2),
    date_limit timestamp with time zone,
    distance_limit_in_km integer,
    uses_limit integer,
    free_delivery boolean DEFAULT true NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.coupons OWNER TO leandro_parisi;

--
-- Name: coupons_branches; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.coupons_branches (
    id integer NOT NULL,
    coupom_id integer NOT NULL,
    branch_id uuid NOT NULL
);


ALTER TABLE public.coupons_branches OWNER TO leandro_parisi;

--
-- Name: coupons_branches_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.coupons_branches_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.coupons_branches_id_seq OWNER TO leandro_parisi;

--
-- Name: coupons_branches_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.coupons_branches_id_seq OWNED BY public.coupons_branches.id;


--
-- Name: coupons_conditions; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.coupons_conditions (
    id integer NOT NULL,
    coupom_id integer NOT NULL,
    condition_id integer NOT NULL
);


ALTER TABLE public.coupons_conditions OWNER TO leandro_parisi;

--
-- Name: coupons_conditions_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.coupons_conditions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.coupons_conditions_id_seq OWNER TO leandro_parisi;

--
-- Name: coupons_conditions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.coupons_conditions_id_seq OWNED BY public.coupons_conditions.id;


--
-- Name: coupons_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.coupons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.coupons_id_seq OWNER TO leandro_parisi;

--
-- Name: coupons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.coupons_id_seq OWNED BY public.coupons.id;


--
-- Name: customer_addresses; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.customer_addresses (
    id uuid NOT NULL,
    customer_id uuid NOT NULL,
    country_id integer NOT NULL,
    state_id integer NOT NULL,
    city_id integer NOT NULL,
    neighborhood character varying(255) NOT NULL,
    street character varying(255) NOT NULL,
    street_number character varying(255) NOT NULL,
    street_complement character varying(255) NOT NULL,
    postal_code character varying(255) NOT NULL,
    lat numeric(17,15) NOT NULL,
    lng numeric(19,15) NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.customer_addresses OWNER TO leandro_parisi;

--
-- Name: customers; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.customers (
    id uuid NOT NULL,
    whatsapp_number character varying(255) NOT NULL,
    whatsapp_id character varying(255) NOT NULL,
    email character varying(255),
    first_name character varying(255) NOT NULL,
    middle_name character varying(255),
    last_name character varying(255),
    cpf character varying(255),
    is_active boolean DEFAULT true NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.customers OWNER TO leandro_parisi;

--
-- Name: delivery_types; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.delivery_types (
    id integer NOT NULL,
    delivery_type public.enum_delivery_types_delivery_type NOT NULL
);


ALTER TABLE public.delivery_types OWNER TO leandro_parisi;

--
-- Name: delivery_types_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.delivery_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.delivery_types_id_seq OWNER TO leandro_parisi;

--
-- Name: delivery_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.delivery_types_id_seq OWNED BY public.delivery_types.id;


--
-- Name: menus; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.menus (
    id uuid NOT NULL,
    menu_name character varying(255) NOT NULL,
    image character varying(255),
    description text,
    is_active boolean DEFAULT true NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.menus OWNER TO leandro_parisi;

--
-- Name: menus_products; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.menus_products (
    id integer NOT NULL,
    menu_id uuid NOT NULL,
    product_id uuid NOT NULL
);


ALTER TABLE public.menus_products OWNER TO leandro_parisi;

--
-- Name: menus_products_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.menus_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.menus_products_id_seq OWNER TO leandro_parisi;

--
-- Name: menus_products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.menus_products_id_seq OWNED BY public.menus_products.id;


--
-- Name: opening_hours; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.opening_hours (
    id integer NOT NULL,
    branch_id uuid NOT NULL,
    monday jsonb,
    tuesday jsonb,
    wednesday jsonb,
    thursday jsonb,
    friday jsonb,
    saturday jsonb,
    sunday jsonb,
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.opening_hours OWNER TO leandro_parisi;

--
-- Name: opening_hours_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.opening_hours_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.opening_hours_id_seq OWNER TO leandro_parisi;

--
-- Name: opening_hours_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.opening_hours_id_seq OWNED BY public.opening_hours.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.orders (
    id uuid NOT NULL,
    branch_id uuid NOT NULL,
    customer_id uuid NOT NULL,
    address_id uuid,
    order_number integer NOT NULL,
    sub_total numeric(10,2) NOT NULL,
    delivery_type_id integer NOT NULL,
    delivery_fee numeric(10,2) DEFAULT 0 NOT NULL,
    payment_method_id integer NOT NULL,
    discount numeric(10,2) DEFAULT 0 NOT NULL,
    total_price numeric(10,2) NOT NULL,
    status integer NOT NULL,
    coupom_id integer,
    promotion_id integer,
    estimated_delivery_duration numeric(10,2),
    distance_in_km numeric(10,2) NOT NULL,
    comments text,
    dispatch_time timestamp with time zone,
    delivery_time timestamp with time zone,
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.orders OWNER TO leandro_parisi;

--
-- Name: orders_order_number_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.orders_order_number_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_order_number_seq OWNER TO leandro_parisi;

--
-- Name: orders_order_number_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.orders_order_number_seq OWNED BY public.orders.order_number;


--
-- Name: orders_products; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.orders_products (
    id integer NOT NULL,
    order_id uuid NOT NULL,
    product_id uuid NOT NULL,
    quantity integer DEFAULT 1 NOT NULL,
    total_price numeric(10,2) NOT NULL,
    attributes jsonb
);


ALTER TABLE public.orders_products OWNER TO leandro_parisi;

--
-- Name: orders_products_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.orders_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_products_id_seq OWNER TO leandro_parisi;

--
-- Name: orders_products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.orders_products_id_seq OWNED BY public.orders_products.id;


--
-- Name: payment_methods; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.payment_methods (
    id integer NOT NULL,
    payment_method character varying(255) NOT NULL
);


ALTER TABLE public.payment_methods OWNER TO leandro_parisi;

--
-- Name: payment_methods_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.payment_methods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.payment_methods_id_seq OWNER TO leandro_parisi;

--
-- Name: payment_methods_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.payment_methods_id_seq OWNED BY public.payment_methods.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.products (
    id uuid NOT NULL,
    category_id integer NOT NULL,
    name character varying(255) NOT NULL,
    image character varying(255),
    attributes jsonb DEFAULT '"[]"'::jsonb NOT NULL,
    base_price numeric(10,2),
    description text,
    ingredients character varying(255)[] DEFAULT (ARRAY[]::character varying[])::character varying(255)[] NOT NULL,
    avaiability integer[] DEFAULT ARRAY[]::integer[] NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.products OWNER TO leandro_parisi;

--
-- Name: promotions; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.promotions (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    total_price numeric(10,2) NOT NULL,
    due_date timestamp with time zone,
    avaiability integer[],
    is_active boolean DEFAULT true NOT NULL,
    image character varying(255),
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.promotions OWNER TO leandro_parisi;

--
-- Name: promotions_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.promotions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.promotions_id_seq OWNER TO leandro_parisi;

--
-- Name: promotions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.promotions_id_seq OWNED BY public.promotions.id;


--
-- Name: promotions_products; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.promotions_products (
    id integer NOT NULL,
    promotion_id integer NOT NULL,
    product_id uuid NOT NULL,
    attributes jsonb DEFAULT '"[]"'::jsonb NOT NULL
);


ALTER TABLE public.promotions_products OWNER TO leandro_parisi;

--
-- Name: promotions_products_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.promotions_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.promotions_products_id_seq OWNER TO leandro_parisi;

--
-- Name: promotions_products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.promotions_products_id_seq OWNED BY public.promotions_products.id;


--
-- Name: states; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.states (
    id integer NOT NULL,
    state_name character varying(255) NOT NULL,
    state_code character varying(255) NOT NULL,
    country_id integer NOT NULL
);


ALTER TABLE public.states OWNER TO leandro_parisi;

--
-- Name: states_id_seq; Type: SEQUENCE; Schema: public; Owner: leandro_parisi
--

CREATE SEQUENCE public.states_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.states_id_seq OWNER TO leandro_parisi;

--
-- Name: states_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leandro_parisi
--

ALTER SEQUENCE public.states_id_seq OWNED BY public.states.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: leandro_parisi
--

CREATE TABLE public.users (
    id uuid NOT NULL,
    phone_number character varying(255) NOT NULL,
    bussiness_name character varying(255) NOT NULL,
    cnpj character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    owner_first_name character varying(255) NOT NULL,
    owner_middle_name character varying(255),
    owner_last_name character varying(255) NOT NULL,
    owner_cpf character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    bot_name character varying(255) DEFAULT 'Walle'::character varying NOT NULL,
    logo character varying(255),
    role public.enum_users_role DEFAULT 'user'::public.enum_users_role,
    is_active boolean DEFAULT true NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO leandro_parisi;

--
-- Name: branches_delivery_types id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_delivery_types ALTER COLUMN id SET DEFAULT nextval('public.branches_delivery_types_id_seq'::regclass);


--
-- Name: branches_menus id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_menus ALTER COLUMN id SET DEFAULT nextval('public.branches_menus_id_seq'::regclass);


--
-- Name: branches_payment_methods id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_payment_methods ALTER COLUMN id SET DEFAULT nextval('public.branches_payment_methods_id_seq'::regclass);


--
-- Name: branches_products id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_products ALTER COLUMN id SET DEFAULT nextval('public.branches_products_id_seq'::regclass);


--
-- Name: branches_promotions id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_promotions ALTER COLUMN id SET DEFAULT nextval('public.branches_promotions_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: cities id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);


--
-- Name: conditions id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.conditions ALTER COLUMN id SET DEFAULT nextval('public.conditions_id_seq'::regclass);


--
-- Name: countries id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.countries ALTER COLUMN id SET DEFAULT nextval('public.countries_id_seq'::regclass);


--
-- Name: coupons id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.coupons ALTER COLUMN id SET DEFAULT nextval('public.coupons_id_seq'::regclass);


--
-- Name: coupons_branches id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.coupons_branches ALTER COLUMN id SET DEFAULT nextval('public.coupons_branches_id_seq'::regclass);


--
-- Name: coupons_conditions id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.coupons_conditions ALTER COLUMN id SET DEFAULT nextval('public.coupons_conditions_id_seq'::regclass);


--
-- Name: delivery_types id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.delivery_types ALTER COLUMN id SET DEFAULT nextval('public.delivery_types_id_seq'::regclass);


--
-- Name: menus_products id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.menus_products ALTER COLUMN id SET DEFAULT nextval('public.menus_products_id_seq'::regclass);


--
-- Name: opening_hours id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.opening_hours ALTER COLUMN id SET DEFAULT nextval('public.opening_hours_id_seq'::regclass);


--
-- Name: orders order_number; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.orders ALTER COLUMN order_number SET DEFAULT nextval('public.orders_order_number_seq'::regclass);


--
-- Name: orders_products id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.orders_products ALTER COLUMN id SET DEFAULT nextval('public.orders_products_id_seq'::regclass);


--
-- Name: payment_methods id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.payment_methods ALTER COLUMN id SET DEFAULT nextval('public.payment_methods_id_seq'::regclass);


--
-- Name: promotions id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.promotions ALTER COLUMN id SET DEFAULT nextval('public.promotions_id_seq'::regclass);


--
-- Name: promotions_products id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.promotions_products ALTER COLUMN id SET DEFAULT nextval('public.promotions_products_id_seq'::regclass);


--
-- Name: states id; Type: DEFAULT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.states ALTER COLUMN id SET DEFAULT nextval('public.states_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public."SequelizeMeta" (name) FROM stdin;
20210620131226-create-users-table.js
20210620131507-creates-payment-methods-table.js
20210620140909-create-countries-table.js
20210620140910-create-states-table.js
20210620140911-create-cities-table.js
20210620141310-create-branches-table.js
20210620141311-create-delivery-types-table.js
20210620142607-create-opening-hours.js
20210620143551-create-customers-table.js
20210620143552-create-customer-addresses-table.js
20210620180859-creates-coupons-table.js
20210620181803-creates-promotions-table.js
20210620182255-creates-orders-table.js
20210620183514-creates-categories-table.js
20210620183739-creates-products-table.js
20210620184446-creates-promotions-products-table.js
20210620185212-creates-branches-delivery-type-table.js
20210621112019-creates-branches-payment-methods-table.js
20210621112657-creates-menus-table.js
20210621112906-creates-menus-products-table.js
20210621113049-creates-branches-menus-table.js
20210621113049-creates-branches-products.js
20210710194944-creates-orders-products-table.js
20210921113049-creates-branches-promotions-table.js
20211021113049-creates-conditions-table.js
20211022113049-creates-coupons-branches-table.js
20211022113049-creates-coupons-conditions-table.js
\.


--
-- Data for Name: branches; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.branches (id, user_id, whatsapp_number, whatsapp_id, manager_name, branch_name, country_id, state_id, city_id, neighborhood, street, street_number, street_complement, postal_code, lat, lng, delivery_fees, logo, is_active, updated_at, created_at) FROM stdin;
7135c8c5-ce97-4125-964f-5dbd38ea9225	e5ba12a9-5cda-4425-8049-b7b1b4f95a40	553182630325	\N	Leandro	Quintal da Dirce 1	1	1	2	Minha Kombi	rua da kombui	222	222	12345	-22.925477000000000	-43.205225000000000	{"fees": [[5, 4], [10, 8], [15, 12]], "type": "radius"}	\N	t	2022-04-08 09:11:26.686819-03	2022-04-08 09:11:26.686819-03
88ec6aed-708a-426c-bfc7-d222a3167b91	e5ba12a9-5cda-4425-8049-b7b1b4f95a40	551166625766	\N	Leandro	Quintal da Dirce 2000	1	1	2	Minha Kombi	rua da kombui	222	222	12345	-22.925477000000000	-43.205225000000000	{"fees": 5, "type": "unique"}	\N	t	2022-04-08 09:11:26.686819-03	2022-04-08 09:11:26.686819-03
f347b944-06c2-4c87-a80a-d73a0f2797fc	686989f1-2181-4dda-8fa3-26f7062970ab	555185076390	\N	Leandro	Quintal da Dirce 2000	1	1	2	Minha Kombi	rua da kombui	222	222	12345	-22.925477000000000	-43.205225000000000	{"fees": 5, "type": "unique"}	\N	t	2022-04-08 09:11:26.686819-03	2022-04-08 09:11:26.686819-03
\.


--
-- Data for Name: branches_delivery_types; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.branches_delivery_types (id, branch_id, delivery_type_id) FROM stdin;
1	7135c8c5-ce97-4125-964f-5dbd38ea9225	1
2	7135c8c5-ce97-4125-964f-5dbd38ea9225	2
3	88ec6aed-708a-426c-bfc7-d222a3167b91	1
4	88ec6aed-708a-426c-bfc7-d222a3167b91	2
5	88ec6aed-708a-426c-bfc7-d222a3167b91	3
\.


--
-- Data for Name: branches_menus; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.branches_menus (id, branch_id, menu_id) FROM stdin;
1	7135c8c5-ce97-4125-964f-5dbd38ea9225	73e5e528-a999-420f-8cf6-b2797dd24e63
2	7135c8c5-ce97-4125-964f-5dbd38ea9225	9eec47f6-fc57-45ea-b456-fe430e9a224a
3	7135c8c5-ce97-4125-964f-5dbd38ea9225	c9c519cd-0d0c-4dc2-816e-45d2210fa8f4
4	88ec6aed-708a-426c-bfc7-d222a3167b91	7a47931a-59ff-4606-b083-bc9b8c3ed8b3
5	88ec6aed-708a-426c-bfc7-d222a3167b91	ea2a615f-ea3d-438f-b463-d4ec65236c4e
6	88ec6aed-708a-426c-bfc7-d222a3167b91	d1079865-0cce-4722-bf77-51747a8c503f
7	88ec6aed-708a-426c-bfc7-d222a3167b91	20b85890-3a68-4ea5-aad2-41cc1154e7c8
\.


--
-- Data for Name: branches_payment_methods; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.branches_payment_methods (id, branch_id, payment_method_id) FROM stdin;
1	7135c8c5-ce97-4125-964f-5dbd38ea9225	1
2	7135c8c5-ce97-4125-964f-5dbd38ea9225	2
3	88ec6aed-708a-426c-bfc7-d222a3167b91	1
4	88ec6aed-708a-426c-bfc7-d222a3167b91	2
5	88ec6aed-708a-426c-bfc7-d222a3167b91	3
\.


--
-- Data for Name: branches_products; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.branches_products (id, branch_id, product_id) FROM stdin;
1	7135c8c5-ce97-4125-964f-5dbd38ea9225	a7fc2cbc-834f-4576-91a1-12a9715228b9
2	88ec6aed-708a-426c-bfc7-d222a3167b91	a7fc2cbc-834f-4576-91a1-12a9715228b9
3	7135c8c5-ce97-4125-964f-5dbd38ea9225	7ccf1dbd-6f8e-44bd-99cd-35b8b99513bb
4	88ec6aed-708a-426c-bfc7-d222a3167b91	7ccf1dbd-6f8e-44bd-99cd-35b8b99513bb
5	88ec6aed-708a-426c-bfc7-d222a3167b91	3f9d1a73-b554-4977-b0f4-79a9724b109c
6	f347b944-06c2-4c87-a80a-d73a0f2797fc	702a03e4-7512-43fd-82e9-b3d608db77fd
\.


--
-- Data for Name: branches_promotions; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.branches_promotions (id, branch_id, promotion_id) FROM stdin;
1	7135c8c5-ce97-4125-964f-5dbd38ea9225	1
2	88ec6aed-708a-426c-bfc7-d222a3167b91	2
3	f347b944-06c2-4c87-a80a-d73a0f2797fc	3
4	88ec6aed-708a-426c-bfc7-d222a3167b91	1
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.categories (id, category_name, updated_at, created_at) FROM stdin;
1	Comida	2022-04-08 09:11:26.759024-03	2022-04-08 09:11:26.759024-03
2	Sucos	2022-04-08 09:11:26.759024-03	2022-04-08 09:11:26.759024-03
3	Bebidas alcoólicas	2022-04-08 09:11:26.759024-03	2022-04-08 09:11:26.759024-03
\.


--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.cities (id, city_name, state_id) FROM stdin;
1	Belo Horizonte	11
2	Acrelândia	1
3	Assis Brasil	1
4	Brasiléia	1
5	Bujari	1
6	Capixaba	1
7	Cruzeiro do Sul	1
8	Epitaciolândia	1
9	Feijó	1
10	Jordão	1
11	Mâncio Lima	1
12	Manoel Urbano	1
13	Marechal Thaumaturgo	1
14	Plácido de Castro	1
15	Porto Acre	1
16	Porto Walter	1
17	Rio Branco	1
18	Rodrigues Alves	1
19	Santa Rosa do Purus	1
20	Sena Madureira	1
21	Senador Guiomard	1
22	Tarauacá	1
23	Xapuri	1
24	Água Branca	2
25	Anadia	2
26	Arapiraca	2
27	Atalaia	2
28	Barra de Santo Antônio	2
29	Barra de São Miguel	2
30	Batalha	2
31	Belém	2
32	Belo Monte	2
33	Boca da Mata	2
34	Branquinha	2
35	Cacimbinhas	2
36	Cajueiro	2
37	Campestre	2
38	Campo Alegre	2
39	Campo Grande	2
40	Canapi	2
41	Capela	2
42	Carneiros	2
43	Chã Preta	2
44	Coité do Nóia	2
45	Colônia Leopoldina	2
46	Coqueiro Seco	2
47	Coruripe	2
48	Craíbas	2
49	Delmiro Gouveia	2
50	Dois Riachos	2
51	Estrela de Alagoas	2
52	Feira Grande	2
53	Feliz Deserto	2
54	Flexeiras	2
55	Girau do Ponciano	2
56	Ibateguara	2
57	Igaci	2
58	Igreja Nova	2
59	Inhapi	2
60	Jacaré dos Homens	2
61	Jacuípe	2
62	Japaratinga	2
63	Jaramataia	2
64	Jequiá da Praia	2
65	Joaquim Gomes	2
66	Jundiá	2
67	Junqueiro	2
68	Lagoa da Canoa	2
69	Limoeiro de Anadia	2
70	Maceió	2
71	Major Isidoro	2
72	Mar Vermelho	2
73	Maragogi	2
74	Maravilha	2
75	Marechal Deodoro	2
76	Maribondo	2
77	Mata Grande	2
78	Matriz de Camaragibe	2
79	Messias	2
80	Minador do Negrão	2
81	Monteirópolis	2
82	Murici	2
83	Novo Lino	2
84	Olho d'Água das Flores	2
85	Olho d'Água do Casado	2
86	Olho d'Água Grande	2
87	Olivença	2
88	Ouro Branco	2
89	Palestina	2
90	Palmeira dos Índios	2
91	Pão de Açúcar	2
92	Pariconha	2
93	Paripueira	2
94	Passo de Camaragibe	2
95	Paulo Jacinto	2
96	Penedo	2
97	Piaçabuçu	2
98	Pilar	2
99	Pindoba	2
100	Piranhas	2
101	Poço das Trincheiras	2
102	Porto Calvo	2
103	Porto de Pedras	2
104	Porto Real do Colégio	2
105	Quebrangulo	2
106	Rio Largo	2
107	Roteiro	2
108	Santa Luzia do Norte	2
109	Santana do Ipanema	2
110	Santana do Mundaú	2
111	São Brás	2
112	São José da Laje	2
113	São José da Tapera	2
114	São Luís do Quitunde	2
115	São Miguel dos Campos	2
116	São Miguel dos Milagres	2
117	São Sebastião	2
118	Satuba	2
119	Senador Rui Palmeira	2
120	Tanque d'Arca	2
121	Taquarana	2
122	Teotônio Vilela	2
123	Traipu	2
124	União dos Palmares	2
125	Viçosa	2
126	Alvarães	3
127	Amaturá	3
128	Anamã	3
129	Anori	3
130	Apuí	3
131	Atalaia do Norte	3
132	Autazes	3
133	Barcelos	3
134	Barreirinha	3
135	Benjamin Constant	3
136	Beruri	3
137	Boa Vista do Ramos	3
138	Boca do Acre	3
139	Borba	3
140	Caapiranga	3
141	Canutama	3
142	Carauari	3
143	Careiro	3
144	Careiro da Várzea	3
145	Coari	3
146	Codajás	3
147	Eirunepé	3
148	Envira	3
149	Fonte Boa	3
150	Guajará	3
151	Humaitá	3
152	Ipixuna	3
153	Iranduba	3
154	Itacoatiara	3
155	Itamarati	3
156	Itapiranga	3
157	Japurá	3
158	Juruá	3
159	Jutaí	3
160	Lábrea	3
161	Manacapuru	3
162	Manaquiri	3
163	Manaus	3
164	Manicoré	3
165	Maraã	3
166	Maués	3
167	Nhamundá	3
168	Nova Olinda do Norte	3
169	Novo Airão	3
170	Novo Aripuanã	3
171	Parintins	3
172	Pauini	3
173	Presidente Figueiredo	3
174	Rio Preto da Eva	3
175	Santa Isabel do Rio Negro	3
176	Santo Antônio do Içá	3
177	São Gabriel da Cachoeira	3
178	São Paulo de Olivença	3
179	São Sebastião do Uatumã	3
180	Silves	3
181	Tabatinga	3
182	Tapauá	3
183	Tefé	3
184	Tonantins	3
185	Uarini	3
186	Urucará	3
187	Urucurituba	3
188	Amapá	4
189	Calçoene	4
190	Cutias	4
191	Ferreira Gomes	4
192	Itaubal	4
193	Laranjal do Jari	4
194	Macapá	4
195	Mazagão	4
196	Oiapoque	4
197	Pedra Branca do Amapari	4
198	Porto Grande	4
199	Pracuúba	4
200	Santana	4
201	Serra do Navio	4
202	Tartarugalzinho	4
203	Vitória do Jari	4
204	Abaíra	5
205	Abaré	5
206	Acajutiba	5
207	Adustina	5
208	Água Fria	5
209	Aiquara	5
210	Alagoinhas	5
211	Alcobaça	5
212	Almadina	5
213	Amargosa	5
214	Amélia Rodrigues	5
215	América Dourada	5
216	Anagé	5
217	Andaraí	5
218	Andorinha	5
219	Angical	5
220	Anguera	5
221	Antas	5
222	Antônio Cardoso	5
223	Antônio Gonçalves	5
224	Aporá	5
225	Apuarema	5
226	Araças	5
227	Aracatu	5
228	Araci	5
229	Aramari	5
230	Arataca	5
231	Aratuípe	5
232	Aurelino Leal	5
233	Baianópolis	5
234	Baixa Grande	5
235	Banzaê	5
236	Barra	5
237	Barra da Estiva	5
238	Barra do Choça	5
239	Barra do Mendes	5
240	Barra do Rocha	5
241	Barreiras	5
242	Barro Alto	5
243	Barrocas	5
244	Barro Preto	5
245	Belmonte	5
246	Belo Campo	5
247	Biritinga	5
248	Boa Nova	5
249	Boa Vista do Tupim	5
250	Bom Jesus da Lapa	5
251	Bom Jesus da Serra	5
252	Boninal	5
253	Bonito	5
254	Boquira	5
255	Botuporã	5
256	Brejões	5
257	Brejolândia	5
258	Brotas de Macaúbas	5
259	Brumado	5
260	Buerarema	5
261	Buritirama	5
262	Caatiba	5
263	Cabaceiras do Paraguaçu	5
264	Cachoeira	5
265	Caculé	5
266	Caém	5
267	Caetanos	5
268	Caetité	5
269	Cafarnaum	5
270	Cairu	5
271	Caldeirão Grande	5
272	Camacan	5
273	Camaçari	5
274	Camamu	5
275	Campo Alegre de Lourdes	5
276	Campo Formoso	5
277	Canápolis	5
278	Canarana	5
279	Canavieiras	5
280	Candeal	5
281	Candeias	5
282	Candiba	5
283	Cândido Sales	5
284	Cansanção	5
285	Canudos	5
286	Capela do Alto Alegre	5
287	Capim Grosso	5
288	Caraíbas	5
289	Caravelas	5
290	Cardeal da Silva	5
291	Carinhanha	5
292	Casa Nova	5
293	Castro Alves	5
294	Catolândia	5
295	Catu	5
296	Caturama	5
297	Central	5
298	Chorrochó	5
299	Cícero Dantas	5
300	Cipó	5
301	Coaraci	5
302	Cocos	5
303	Conceição da Feira	5
304	Conceição do Almeida	5
305	Conceição do Coité	5
306	Conceição do Jacuípe	5
307	Conde	5
308	Condeúba	5
309	Contendas do Sincorá	5
310	Coração de Maria	5
311	Cordeiros	5
312	Coribe	5
313	Coronel João Sá	5
314	Correntina	5
315	Cotegipe	5
316	Cravolândia	5
317	Crisópolis	5
318	Cristópolis	5
319	Cruz das Almas	5
320	Curaçá	5
321	Dário Meira	5
322	Dias d'Ávila	5
323	Dom Basílio	5
324	Dom Macedo Costa	5
325	Elísio Medrado	5
326	Encruzilhada	5
327	Entre Rios	5
328	Érico Cardoso	5
329	Esplanada	5
330	Euclides da Cunha	5
331	Eunápolis	5
332	Fátima	5
333	Feira da Mata	5
334	Feira de Santana	5
335	Filadélfia	5
336	Firmino Alves	5
337	Floresta Azul	5
338	Formosa do Rio Preto	5
339	Gandu	5
340	Gavião	5
341	Gentio do Ouro	5
342	Glória	5
343	Gongogi	5
344	Governador Mangabeira	5
345	Guajeru	5
346	Guanambi	5
347	Guaratinga	5
348	Heliópolis	5
349	Iaçu	5
350	Ibiassucê	5
351	Ibicaraí	5
352	Ibicoara	5
353	Ibicuí	5
354	Ibipeba	5
355	Ibipitanga	5
356	Ibiquera	5
357	Ibirapitanga	5
358	Ibirapuã	5
359	Ibirataia	5
360	Ibitiara	5
361	Ibititá	5
362	Ibotirama	5
363	Ichu	5
364	Igaporã	5
365	Igrapiúna	5
366	Iguaí	5
367	Ilhéus	5
368	Inhambupe	5
369	Ipecaetá	5
370	Ipiaú	5
371	Ipirá	5
372	Ipupiara	5
373	Irajuba	5
374	Iramaia	5
375	Iraquara	5
376	Irará	5
377	Irecê	5
378	Itabela	5
379	Itaberaba	5
380	Itabuna	5
381	Itacaré	5
382	Itaeté	5
383	Itagi	5
384	Itagibá	5
385	Itagimirim	5
386	Itaguaçu da Bahia	5
387	Itaju do Colônia	5
388	Itajuípe	5
389	Itamaraju	5
390	Itamari	5
391	Itambé	5
392	Itanagra	5
393	Itanhém	5
394	Itaparica	5
395	Itapé	5
396	Itapebi	5
397	Itapetinga	5
398	Itapicuru	5
399	Itapitanga	5
400	Itaquara	5
401	Itarantim	5
402	Itatim	5
403	Itiruçu	5
404	Itiúba	5
405	Itororó	5
406	Ituaçu	5
407	Ituberá	5
408	Iuiú	5
409	Jaborandi	5
410	Jacaraci	5
411	Jacobina	5
412	Jaguaquara	5
413	Jaguarari	5
414	Jaguaripe	5
415	Jandaíra	5
416	Jequié	5
417	Jeremoabo	5
418	Jiquiriçá	5
419	Jitaúna	5
420	João Dourado	5
421	Juazeiro	5
422	Jucuruçu	5
423	Jussara	5
424	Jussari	5
425	Jussiape	5
426	Lafaiete Coutinho	5
427	Lagoa Real	5
428	Laje	5
429	Lajedão	5
430	Lajedinho	5
431	Lajedo do Tabocal	5
432	Lamarão	5
433	Lapão	5
434	Lauro de Freitas	5
435	Lençóis	5
436	Licínio de Almeida	5
437	Livramento de Nossa Senhora	5
438	Luís Eduardo Magalhães	5
439	Macajuba	5
440	Macarani	5
441	Macaúbas	5
442	Macururé	5
443	Madre de Deus	5
444	Maetinga	5
445	Maiquinique	5
446	Mairi	5
447	Malhada	5
448	Malhada de Pedras	5
449	Manoel Vitorino	5
450	Mansidão	5
451	Maracás	5
452	Maragogipe	5
453	Maraú	5
454	Marcionílio Souza	5
455	Mascote	5
456	Mata de São João	5
457	Matina	5
458	Medeiros Neto	5
459	Miguel Calmon	5
460	Milagres	5
461	Mirangaba	5
462	Mirante	5
463	Monte Santo	5
464	Morpará	5
465	Morro do Chapéu	5
466	Mortugaba	5
467	Mucugê	5
468	Mucuri	5
469	Mulungu do Morro	5
470	Mundo Novo	5
471	Muniz Ferreira	5
472	Muquém de São Francisco	5
473	Muritiba	5
474	Mutuípe	5
475	Nazaré	5
476	Nilo Peçanha	5
477	Nordestina	5
478	Nova Canaã	5
479	Nova Fátima	5
480	Nova Ibiá	5
481	Nova Itarana	5
482	Nova Redenção	5
483	Nova Soure	5
484	Nova Viçosa	5
485	Novo Horizonte	5
486	Novo Triunfo	5
487	Olindina	5
488	Oliveira dos Brejinhos	5
489	Ouriçangas	5
490	Ourolândia	5
491	Palmas de Monte Alto	5
492	Palmeiras	5
493	Paramirim	5
494	Paratinga	5
495	Paripiranga	5
496	Pau Brasil	5
497	Paulo Afonso	5
498	Pé de Serra	5
499	Pedrão	5
500	Pedro Alexandre	5
501	Piatã	5
502	Pilão Arcado	5
503	Pindaí	5
504	Pindobaçu	5
505	Pintadas	5
506	Piraí do Norte	5
507	Piripá	5
508	Piritiba	5
509	Planaltino	5
510	Planalto	5
511	Poções	5
512	Pojuca	5
513	Ponto Novo	5
514	Porto Seguro	5
515	Potiraguá	5
516	Prado	5
517	Presidente Dutra	5
518	Presidente Jânio Quadros	5
519	Presidente Tancredo Neves	5
520	Queimadas	5
521	Quijingue	5
522	Quixabeira	5
523	Rafael Jambeiro	5
524	Remanso	5
525	Retirolândia	5
526	Riachão das Neves	5
527	Riachão do Jacuípe	5
528	Riacho de Santana	5
529	Ribeira do Amparo	5
530	Ribeira do Pombal	5
531	Ribeirão do Largo	5
532	Rio de Contas	5
533	Rio do Antônio	5
534	Rio do Pires	5
535	Rio Real	5
536	Rodelas	5
537	Ruy Barbosa	5
538	Salinas da Margarida	5
539	Salvador	5
540	Santa Bárbara	5
541	Santa Brígida	5
542	Santa Cruz Cabrália	5
543	Santa Cruz da Vitória	5
544	Santa Inês	5
545	Santa Luzia	5
546	Santa Maria da Vitória	5
547	Santa Rita de Cássia	5
548	Santa Teresinha	5
549	Santaluz	5
550	Santana	5
551	Santanópolis	5
552	Santo Amaro	5
553	Santo Antônio de Jesus	5
554	Santo Estêvão	5
555	São Desidério	5
556	São Domingos	5
557	São Felipe	5
558	São Félix	5
559	São Félix do Coribe	5
560	São Francisco do Conde	5
561	São Gabriel	5
562	São Gonçalo dos Campos	5
563	São José da Vitória	5
564	São José do Jacuípe	5
565	São Miguel das Matas	5
566	São Sebastião do Passé	5
567	Sapeaçu	5
568	Sátiro Dias	5
569	Saubara	5
570	Saúde	5
571	Seabra	5
572	Sebastião Laranjeiras	5
573	Senhor do Bonfim	5
574	Sento Sé	5
575	Serra do Ramalho	5
576	Serra Dourada	5
577	Serra Preta	5
578	Serrinha	5
579	Serrolândia	5
580	Simões Filho	5
581	Sítio do Mato	5
582	Sítio do Quinto	5
583	Sobradinho	5
584	Souto Soares	5
585	Tabocas do Brejo Velho	5
586	Tanhaçu	5
587	Tanque Novo	5
588	Tanquinho	5
589	Taperoá	5
590	Tapiramutá	5
591	Teixeira de Freitas	5
592	Teodoro Sampaio	5
593	Teofilândia	5
594	Teolândia	5
595	Terra Nova	5
596	Tremedal	5
597	Tucano	5
598	Uauá	5
599	Ubaíra	5
600	Ubaitaba	5
601	Ubatã	5
602	Uibaí	5
603	Umburanas	5
604	Una	5
605	Urandi	5
606	Uruçuca	5
607	Utinga	5
608	Valença	5
609	Valente	5
610	Várzea da Roça	5
611	Várzea do Poço	5
612	Várzea Nova	5
613	Varzedo	5
614	Vera Cruz	5
615	Vereda	5
616	Vitória da Conquista	5
617	Wagner	5
618	Wanderley	5
619	Wenceslau Guimarães	5
620	Xique-Xique	5
621	Abaiara	6
622	Acarapé	6
623	Acaraú	6
624	Acopiara	6
625	Aiuaba	6
626	Alcântaras	6
627	Altaneira	6
628	Alto Santo	6
629	Amontada	6
630	Antonina do Norte	6
631	Apuiarés	6
632	Aquiraz	6
633	Aracati	6
634	Aracoiaba	6
635	Ararendá	6
636	Araripe	6
637	Aratuba	6
638	Arneiroz	6
639	Assaré	6
640	Aurora	6
641	Baixio	6
642	Banabuiú	6
643	Barbalha	6
644	Barreira	6
645	Barro	6
646	Barroquinha	6
647	Baturité	6
648	Beberibe	6
649	Bela Cruz	6
650	Boa Viagem	6
651	Brejo Santo	6
652	Camocim	6
653	Campos Sales	6
654	Canindé	6
655	Capistrano	6
656	Caridade	6
657	Cariré	6
658	Caririaçu	6
659	Cariús	6
660	Carnaubal	6
661	Cascavel	6
662	Catarina	6
663	Catunda	6
664	Caucaia	6
665	Cedro	6
666	Chaval	6
667	Choró	6
668	Chorozinho	6
669	Coreaú	6
670	Crateús	6
671	Crato	6
672	Croatá	6
673	Cruz	6
674	Deputado Irapuan Pinheiro	6
675	Ererê	6
676	Eusébio	6
677	Farias Brito	6
678	Forquilha	6
679	Fortaleza	6
680	Fortim	6
681	Frecheirinha	6
682	General Sampaio	6
683	Graça	6
684	Granja	6
685	Granjeiro	6
686	Groaíras	6
687	Guaiúba	6
688	Guaraciaba do Norte	6
689	Guaramiranga	6
690	Hidrolândia	6
691	Horizonte	6
692	Ibaretama	6
693	Ibiapina	6
694	Ibicuitinga	6
695	Icapuí	6
696	Icó	6
697	Iguatu	6
698	Independência	6
699	Ipaporanga	6
700	Ipaumirim	6
701	Ipu	6
702	Ipueiras	6
703	Iracema	6
704	Irauçuba	6
705	Itaiçaba	6
706	Itaitinga	6
707	Itapagé	6
708	Itapipoca	6
709	Itapiúna	6
710	Itarema	6
711	Itatira	6
712	Jaguaretama	6
713	Jaguaribara	6
714	Jaguaribe	6
715	Jaguaruana	6
716	Jardim	6
717	Jati	6
718	Jijoca de Jericoaroara	6
719	Juazeiro do Norte	6
720	Jucás	6
721	Lavras da Mangabeira	6
722	Limoeiro do Norte	6
723	Madalena	6
724	Maracanaú	6
725	Maranguape	6
726	Marco	6
727	Martinópole	6
728	Massapê	6
729	Mauriti	6
730	Meruoca	6
731	Milagres	6
732	Milhã	6
733	Miraíma	6
734	Missão Velha	6
735	Mombaça	6
736	Monsenhor Tabosa	6
737	Morada Nova	6
738	Moraújo	6
739	Morrinhos	6
740	Mucambo	6
741	Mulungu	6
742	Nova Olinda	6
743	Nova Russas	6
744	Novo Oriente	6
745	Ocara	6
746	Orós	6
747	Pacajus	6
748	Pacatuba	6
749	Pacoti	6
750	Pacujá	6
751	Palhano	6
752	Palmácia	6
753	Paracuru	6
754	Paraipaba	6
755	Parambu	6
756	Paramoti	6
757	Pedra Branca	6
758	Penaforte	6
759	Pentecoste	6
760	Pereiro	6
761	Pindoretama	6
762	Piquet Carneiro	6
763	Pires Ferreira	6
764	Poranga	6
765	Porteiras	6
766	Potengi	6
767	Potiretama	6
768	Quiterianópolis	6
769	Quixadá	6
770	Quixelô	6
771	Quixeramobim	6
772	Quixeré	6
773	Redenção	6
774	Reriutaba	6
775	Russas	6
776	Saboeiro	6
777	Salitre	6
778	Santa Quitéria	6
779	Santana do Acaraú	6
780	Santana do Cariri	6
781	São Benedito	6
782	São Gonçalo do Amarante	6
783	São João do Jaguaribe	6
784	São Luís do Curu	6
785	Senador Pompeu	6
786	Senador Sá	6
787	Sobral	6
788	Solonópole	6
789	Tabuleiro do Norte	6
790	Tamboril	6
791	Tarrafas	6
792	Tauá	6
793	Tejuçuoca	6
794	Tianguá	6
795	Trairi	6
796	Tururu	6
797	Ubajara	6
798	Umari	6
799	Umirim	6
800	Uruburetama	6
801	Uruoca	6
802	Varjota	6
803	Várzea Alegre	6
804	Viçosa do Ceará	6
805	Brasília	7
806	Águas Claras	7
807	Brasília	7
808	Ceilândia	7
809	Gama	7
810	Guará	7
811	Plano Piloto	7
812	Planaltina	7
813	Recanto das Emas	7
814	Samambaia	7
815	Santa Maria	7
816	Taguatinga	7
817	Afonso Cláudio	8
818	Água Doce do Norte	8
819	Águia Branca	8
820	Alegre	8
821	Alfredo Chaves	8
822	Alto Rio Novo	8
823	Anchieta	8
824	Apiacá	8
825	Aracruz	8
826	Atilio Vivacqua	8
827	Baixo Guandu	8
828	Barra de São Francisco	8
829	Boa Esperança	8
830	Bom Jesus do Norte	8
831	Brejetuba	8
832	Cachoeiro de Itapemirim	8
833	Cariacica	8
834	Castelo	8
835	Colatina	8
836	Conceição da Barra	8
837	Conceição do Castelo	8
838	Divino de São Lourenço	8
839	Domingos Martins	8
840	Dores do Rio Preto	8
841	Ecoporanga	8
842	Fundão	8
843	Governador Lindenberg	8
844	Guaçuí	8
845	Guarapari	8
846	Ibatiba	8
847	Ibiraçu	8
848	Ibitirama	8
849	Iconha	8
850	Irupi	8
851	Itaguaçu	8
852	Itapemirim	8
853	Itarana	8
854	Iúna	8
855	Jaguaré	8
856	Jerônimo Monteiro	8
857	João Neiva	8
858	Laranja da Terra	8
859	Linhares	8
860	Mantenópolis	8
861	Marataizes	8
862	Marechal Floriano	8
863	Marilândia	8
864	Mimoso do Sul	8
865	Montanha	8
866	Mucurici	8
867	Muniz Freire	8
868	Muqui	8
869	Nova Venécia	8
870	Pancas	8
871	Pedro Canário	8
872	Pinheiros	8
873	Piúma	8
874	Ponto Belo	8
875	Presidente Kennedy	8
876	Rio Bananal	8
877	Rio Novo do Sul	8
878	Santa Leopoldina	8
879	Santa Maria de Jetibá	8
880	Santa Teresa	8
881	São Domingos do Norte	8
882	São Gabriel da Palha	8
883	São José do Calçado	8
884	São Mateus	8
885	São Roque do Canaã	8
886	Serra	8
887	Sooretama	8
888	Vargem Alta	8
889	Venda Nova do Imigrante	8
890	Viana	8
891	Vila Pavão	8
892	Vila Valério	8
893	Vila Velha	8
894	Vitória	8
895	Abadia de Goiás	9
896	Abadiânia	9
897	Acreúna	9
898	Adelândia	9
899	Água Fria de Goiás	9
900	Água Limpa	9
901	Águas Lindas de Goiás	9
902	Alexânia	9
903	Aloândia	9
904	Alto Horizonte	9
905	Alto Paraíso de Goiás	9
906	Alvorada do Norte	9
907	Amaralina	9
908	Americano do Brasil	9
909	Amorinópolis	9
910	Anápolis	9
911	Anhanguera	9
912	Anicuns	9
913	Aparecida de Goiânia	9
914	Aparecida do Rio Doce	9
915	Aporé	9
916	Araçu	9
917	Aragarças	9
918	Aragoiânia	9
919	Araguapaz	9
920	Arenópolis	9
921	Aruanã	9
922	Aurilândia	9
923	Avelinópolis	9
924	Baliza	9
925	Barro Alto	9
926	Bela Vista de Goiás	9
927	Bom Jardim de Goiás	9
928	Bom Jesus de Goiás	9
929	Bonfinópolis	9
930	Bonópolis	9
931	Brazabrantes	9
932	Britânia	9
933	Buriti Alegre	9
934	Buriti de Goiás	9
935	Buritinópolis	9
936	Cabeceiras	9
937	Cachoeira Alta	9
938	Cachoeira de Goiás	9
939	Cachoeira Dourada	9
940	Caçu	9
941	Caiapônia	9
942	Caldas Novas	9
943	Caldazinha	9
944	Campestre de Goiás	9
945	Campinaçu	9
946	Campinorte	9
947	Campo Alegre de Goiás	9
948	Campos Limpo de Goiás	9
949	Campos Belos	9
950	Campos Verdes	9
951	Carmo do Rio Verde	9
952	Castelândia	9
953	Catalão	9
954	Caturaí	9
955	Cavalcante	9
956	Ceres	9
957	Cezarina	9
958	Chapadão do Céu	9
959	Cidade Ocidental	9
960	Cocalzinho de Goiás	9
961	Colinas do Sul	9
962	Córrego do Ouro	9
963	Corumbá de Goiás	9
964	Corumbaíba	9
965	Cristalina	9
966	Cristianópolis	9
967	Crixás	9
968	Cromínia	9
969	Cumari	9
970	Damianópolis	9
971	Damolândia	9
972	Davinópolis	9
973	Diorama	9
974	Divinópolis de Goiás	9
975	Doverlândia	9
976	Edealina	9
977	Edéia	9
978	Estrela do Norte	9
979	Faina	9
980	Fazenda Nova	9
981	Firminópolis	9
982	Flores de Goiás	9
983	Formosa	9
984	Formoso	9
985	Gameleira de Goiás	9
986	Goianápolis	9
987	Goiandira	9
988	Goianésia	9
989	Goiânia	9
990	Goianira	9
991	Goiás	9
992	Goiatuba	9
993	Gouvelândia	9
994	Guapó	9
995	Guaraíta	9
996	Guarani de Goiás	9
997	Guarinos	9
998	Heitoraí	9
999	Hidrolândia	9
1000	Hidrolina	9
1001	Iaciara	9
1002	Inaciolândia	9
1003	Indiara	9
1004	Inhumas	9
1005	Ipameri	9
1006	Ipiranga de Goiás	9
1007	Iporá	9
1008	Israelândia	9
1009	Itaberaí	9
1010	Itaguari	9
1011	Itaguaru	9
1012	Itajá	9
1013	Itapaci	9
1014	Itapirapuã	9
1015	Itapuranga	9
1016	Itarumã	9
1017	Itauçu	9
1018	Itumbiara	9
1019	Ivolândia	9
1020	Jandaia	9
1021	Jaraguá	9
1022	Jataí	9
1023	Jaupaci	9
1024	Jesúpolis	9
1025	Joviânia	9
1026	Jussara	9
1027	Lagoa Santa	9
1028	Leopoldo de Bulhões	9
1029	Luziânia	9
1030	Mairipotaba	9
1031	Mambaí	9
1032	Mara Rosa	9
1033	Marzagão	9
1034	Matrinchã	9
1035	Maurilândia	9
1036	Mimoso de Goiás	9
1037	Minaçu	9
1038	Mineiros	9
1039	Moiporá	9
1040	Monte Alegre de Goiás	9
1041	Montes Claros de Goiás	9
1042	Montividiu	9
1043	Montividiu do Norte	9
1044	Morrinhos	9
1045	Morro Agudo de Goiás	9
1046	Mossâmedes	9
1047	Mozarlândia	9
1048	Mundo Novo	9
1049	Mutunópolis	9
1050	Nazário	9
1051	Nerópolis	9
1052	Niquelândia	9
1053	Nova América	9
1054	Nova Aurora	9
1055	Nova Crixás	9
1056	Nova Glória	9
1057	Nova Iguaçu de Goiás	9
1058	Nova Roma	9
1059	Nova Veneza	9
1060	Novo Brasil	9
1061	Novo Gama	9
1062	Novo Planalto	9
1063	Orizona	9
1064	Ouro Verde de Goiás	9
1065	Ouvidor	9
1066	Padre Bernardo	9
1067	Palestina de Goiás	9
1068	Palmeiras de Goiás	9
1069	Palmelo	9
1070	Palminópolis	9
1071	Panamá	9
1072	Paranaiguara	9
1073	Paraúna	9
1074	Perolândia	9
1075	Petrolina de Goiás	9
1076	Pilar de Goiás	9
1077	Piracanjuba	9
1078	Piranhas	9
1079	Pirenópolis	9
1080	Pires do Rio	9
1081	Planaltina	9
1082	Pontalina	9
1083	Porangatu	9
1084	Porteirão	9
1085	Portelândia	9
1086	Posse	9
1087	Professor Jamil	9
1088	Quirinópolis	9
1089	Rialma	9
1090	Rianápolis	9
1091	Rio Quente	9
1092	Rio Verde	9
1093	Rubiataba	9
1094	Sanclerlândia	9
1095	Santa Bárbara de Goiás	9
1096	Santa Cruz de Goiás	9
1097	Santa Fé de Goiás	9
1098	Santa Helena de Goiás	9
1099	Santa Isabel	9
1100	Santa Rita do Araguaia	9
1101	Santa Rita do Novo Destino	9
1102	Santa Rosa de Goiás	9
1103	Santa Tereza de Goiás	9
1104	Santa Terezinha de Goiás	9
1105	Santo Antônio da Barra	9
1106	Santo Antônio de Goiás	9
1107	Santo Antônio do Descoberto	9
1108	São Domingos	9
1109	São Francisco de Goiás	9
1110	São João d'Aliança	9
1111	São João da Paraúna	9
1112	São Luís de Montes Belos	9
1113	São Luíz do Norte	9
1114	São Miguel do Araguaia	9
1115	São Miguel do Passa Quatro	9
1116	São Patrício	9
1117	São Simão	9
1118	Senador Canedo	9
1119	Serranópolis	9
1120	Silvânia	9
1121	Simolândia	9
1122	Sítio d'Abadia	9
1123	Taquaral de Goiás	9
1124	Teresina de Goiás	9
1125	Terezópolis de Goiás	9
1126	Três Ranchos	9
1127	Trindade	9
1128	Trombas	9
1129	Turvânia	9
1130	Turvelândia	9
1131	Uirapuru	9
1132	Uruaçu	9
1133	Uruana	9
1134	Urutaí	9
1135	Valparaíso de Goiás	9
1136	Varjão	9
1137	Vianópolis	9
1138	Vicentinópolis	9
1139	Vila Boa	9
1140	Vila Propício	9
1141	Açailândia	10
1142	Afonso Cunha	10
1143	Água Doce do Maranhão	10
1144	Alcântara	10
1145	Aldeias Altas	10
1146	Altamira do Maranhão	10
1147	Alto Alegre do Maranhão	10
1148	Alto Alegre do Pindaré	10
1149	Alto Parnaíba	10
1150	Amapá do Maranhão	10
1151	Amarante do Maranhão	10
1152	Anajatuba	10
1153	Anapurus	10
1154	Apicum-Açu	10
1155	Araguanã	10
1156	Araioses	10
1157	Arame	10
1158	Arari	10
1159	Axixá	10
1160	Bacabal	10
1161	Bacabeira	10
1162	Bacuri	10
1163	Bacurituba	10
1164	Balsas	10
1165	Barão de Grajaú	10
1166	Barra do Corda	10
1167	Barreirinhas	10
1168	Bela Vista do Maranhão	10
1169	Belágua	10
1170	Benedito Leite	10
1171	Bequimão	10
1172	Bernardo do Mearim	10
1173	Boa Vista do Gurupi	10
1174	Bom Jardim	10
1175	Bom Jesus das Selvas	10
1176	Bom Lugar	10
1177	Brejo	10
1178	Brejo de Areia	10
1179	Buriti	10
1180	Buriti Bravo	10
1181	Buriticupu	10
1182	Buritirana	10
1183	Cachoeira Grande	10
1184	Cajapió	10
1185	Cajari	10
1186	Campestre do Maranhão	10
1187	Cândido Mendes	10
1188	Cantanhede	10
1189	Capinzal do Norte	10
1190	Carolina	10
1191	Carutapera	10
1192	Caxias	10
1193	Cedral	10
1194	Central do Maranhão	10
1195	Centro do Guilherme	10
1196	Centro Novo do Maranhão	10
1197	Chapadinha	10
1198	Cidelândia	10
1199	Codó	10
1200	Coelho Neto	10
1201	Colinas	10
1202	Conceição do Lago-Açu	10
1203	Coroatá	10
1204	Cururupu	10
1205	Davinópolis	10
1206	Dom Pedro	10
1207	Duque Bacelar	10
1208	Esperantinópolis	10
1209	Estreito	10
1210	Feira Nova do Maranhão	10
1211	Fernando Falcão	10
1212	Formosa da Serra Negra	10
1213	Fortaleza dos Nogueiras	10
1214	Fortuna	10
1215	Godofredo Viana	10
1216	Gonçalves Dias	10
1217	Governador Archer	10
1218	Governador Edison Lobão	10
1219	Governador Eugênio Barros	10
1220	Governador Luiz Rocha	10
1221	Governador Newton Bello	10
1222	Governador Nunes Freire	10
1223	Graça Aranha	10
1224	Grajaú	10
1225	Guimarães	10
1226	Humberto de Campos	10
1227	Icatu	10
1228	Igarapé do Meio	10
1229	Igarapé Grande	10
1230	Imperatriz	10
1231	Itaipava do Grajaú	10
1232	Itapecuru Mirim	10
1233	Itinga do Maranhão	10
1234	Jatobá	10
1235	Jenipapo dos Vieiras	10
1236	João Lisboa	10
1237	Joselândia	10
1238	Junco do Maranhão	10
1239	Lago da Pedra	10
1240	Lago do Junco	10
1241	Lago dos Rodrigues	10
1242	Lago Verde	10
1243	Lagoa do Mato	10
1244	Lagoa Grande do Maranhão	10
1245	Lajeado Novo	10
1246	Lima Campos	10
1247	Loreto	10
1248	Luís Domingues	10
1249	Magalhães de Almeida	10
1250	Maracaçumé	10
1251	Marajá do Sena	10
1252	Maranhãozinho	10
1253	Mata Roma	10
1254	Matinha	10
1255	Matões	10
1256	Matões do Norte	10
1257	Milagres do Maranhão	10
1258	Mirador	10
1259	Miranda do Norte	10
1260	Mirinzal	10
1261	Monção	10
1262	Montes Altos	10
1263	Morros	10
1264	Nina Rodrigues	10
1265	Nova Colinas	10
1266	Nova Iorque	10
1267	Nova Olinda do Maranhão	10
1268	Olho d'Água das Cunhãs	10
1269	Olinda Nova do Maranhão	10
1270	Paço do Lumiar	10
1271	Palmeirândia	10
1272	Paraibano	10
1273	Parnarama	10
1274	Passagem Franca	10
1275	Pastos Bons	10
1276	Paulino Neves	10
1277	Paulo Ramos	10
1278	Pedreiras	10
1279	Pedro do Rosário	10
1280	Penalva	10
1281	Peri Mirim	10
1282	Peritoró	10
1283	Pindaré Mirim	10
1284	Pinheiro	10
1285	Pio XII	10
1286	Pirapemas	10
1287	Poção de Pedras	10
1288	Porto Franco	10
1289	Porto Rico do Maranhão	10
1290	Presidente Dutra	10
1291	Presidente Juscelino	10
1292	Presidente Médici	10
1293	Presidente Sarney	10
1294	Presidente Vargas	10
1295	Primeira Cruz	10
1296	Raposa	10
1297	Riachão	10
1298	Ribamar Fiquene	10
1299	Rosário	10
1300	Sambaíba	10
1301	Santa Filomena do Maranhão	10
1302	Santa Helena	10
1303	Santa Inês	10
1304	Santa Luzia	10
1305	Santa Luzia do Paruá	10
1306	Santa Quitéria do Maranhão	10
1307	Santa Rita	10
1308	Santana do Maranhão	10
1309	Santo Amaro do Maranhão	10
1310	Santo Antônio dos Lopes	10
1311	São Benedito do Rio Preto	10
1312	São Bento	10
1313	São Bernardo	10
1314	São Domingos do Azeitão	10
1315	São Domingos do Maranhão	10
1316	São Félix de Balsas	10
1317	São Francisco do Brejão	10
1318	São Francisco do Maranhão	10
1319	São João Batista	10
1320	São João do Carú	10
1321	São João do Paraíso	10
1322	São João do Soter	10
1323	São João dos Patos	10
1324	São José de Ribamar	10
1325	São José dos Basílios	10
1326	São Luís	10
1327	São Luís Gonzaga do Maranhão	10
1328	São Mateus do Maranhão	10
1329	São Pedro da Água Branca	10
1330	São Pedro dos Crentes	10
1331	São Raimundo das Mangabeiras	10
1332	São Raimundo do Doca Bezerra	10
1333	São Roberto	10
1334	São Vicente Ferrer	10
1335	Satubinha	10
1336	Senador Alexandre Costa	10
1337	Senador La Rocque	10
1338	Serrano do Maranhão	10
1339	Sítio Novo	10
1340	Sucupira do Norte	10
1341	Sucupira do Riachão	10
1342	Tasso Fragoso	10
1343	Timbiras	10
1344	Timon	10
1345	Trizidela do Vale	10
1346	Tufilândia	10
1347	Tuntum	10
1348	Turiaçu	10
1349	Turilândia	10
1350	Tutóia	10
1351	Urbano Santos	10
1352	Vargem Grande	10
1353	Viana	10
1354	Vila Nova dos Martírios	10
1355	Vitória do Mearim	10
1356	Vitorino Freire	10
1357	Zé Doca	10
1358	Abadia dos Dourados	11
1359	Abaeté	11
1360	Abre Campo	11
1361	Acaiaca	11
1362	Açucena	11
1363	Água Boa	11
1364	Água Comprida	11
1365	Aguanil	11
1366	Águas Formosas	11
1367	Águas Vermelhas	11
1368	Aimorés	11
1369	Aiuruoca	11
1370	Alagoa	11
1371	Albertina	11
1372	Além Paraíba	11
1373	Alfenas	11
1374	Alfredo Vasconcelos	11
1375	Almenara	11
1376	Alpercata	11
1377	Alpinópolis	11
1378	Alterosa	11
1379	Alto Caparaó	11
1380	Alto Jequitibá	11
1381	Alto Rio Doce	11
1382	Alvarenga	11
1383	Alvinópolis	11
1384	Alvorada de Minas	11
1385	Amparo do Serra	11
1386	Andradas	11
1387	Andrelândia	11
1388	Angelândia	11
1389	Antônio Carlos	11
1390	Antônio Dias	11
1391	Antônio Prado de Minas	11
1392	Araçaí	11
1393	Aracitaba	11
1394	Araçuaí	11
1395	Araguari	11
1396	Arantina	11
1397	Araponga	11
1398	Araporã	11
1399	Arapuá	11
1400	Araújos	11
1401	Araxá	11
1402	Arceburgo	11
1403	Arcos	11
1404	Areado	11
1405	Argirita	11
1406	Aricanduva	11
1407	Arinos	11
1408	Astolfo Dutra	11
1409	Ataléia	11
1410	Augusto de Lima	11
1411	Baependi	11
1412	Baldim	11
1413	Bambuí	11
1414	Bandeira	11
1415	Bandeira do Sul	11
1416	Barão de Cocais	11
1417	Barão de Monte Alto	11
1418	Barbacena	11
1419	Barra Longa	11
1420	Barroso	11
1421	Bela Vista de Minas	11
1422	Belmiro Braga	11
1423	Belo Horizonte	11
1424	Belo Oriente	11
1425	Belo Vale	11
1426	Berilo	11
1427	Berizal	11
1428	Bertópolis	11
1429	Betim	11
1430	Bias Fortes	11
1431	Bicas	11
1432	Biquinhas	11
1433	Boa Esperança	11
1434	Bocaina de Minas	11
1435	Bocaiúva	11
1436	Bom Despacho	11
1437	Bom Jardim de Minas	11
1438	Bom Jesus da Penha	11
1439	Bom Jesus do Amparo	11
1440	Bom Jesus do Galho	11
1441	Bom Repouso	11
1442	Bom Sucesso	11
1443	Bonfim	11
1444	Bonfinópolis de Minas	11
1445	Bonito de Minas	11
1446	Borda da Mata	11
1447	Botelhos	11
1448	Botumirim	11
1449	Brás Pires	11
1450	Brasilândia de Minas	11
1451	Brasília de Minas	11
1452	Brasópolis	11
1453	Braúnas	11
1454	Brumadinho	11
1455	Bueno Brandão	11
1456	Buenópolis	11
1457	Bugre	11
1458	Buritis	11
1459	Buritizeiro	11
1460	Cabeceira Grande	11
1461	Cabo Verde	11
1462	Cachoeira da Prata	11
1463	Cachoeira de Minas	11
1464	Cachoeira de Pajeú	11
1465	Cachoeira Dourada	11
1466	Caetanópolis	11
1467	Caeté	11
1468	Caiana	11
1469	Cajuri	11
1470	Caldas	11
1471	Camacho	11
1472	Camanducaia	11
1473	Cambuí	11
1474	Cambuquira	11
1475	Campanário	11
1476	Campanha	11
1477	Campestre	11
1478	Campina Verde	11
1479	Campo Azul	11
1480	Campo Belo	11
1481	Campo do Meio	11
1482	Campo Florido	11
1483	Campos Altos	11
1484	Campos Gerais	11
1485	Cana Verde	11
1486	Canaã	11
1487	Canápolis	11
1488	Candeias	11
1489	Cantagalo	11
1490	Caparaó	11
1491	Capela Nova	11
1492	Capelinha	11
1493	Capetinga	11
1494	Capim Branco	11
1495	Capinópolis	11
1496	Capitão Andrade	11
1497	Capitão Enéas	11
1498	Capitólio	11
1499	Caputira	11
1500	Caraí	11
1501	Caranaíba	11
1502	Carandaí	11
1503	Carangola	11
1504	Caratinga	11
1505	Carbonita	11
1506	Careaçu	11
1507	Carlos Chagas	11
1508	Carmésia	11
1509	Carmo da Cachoeira	11
1510	Carmo da Mata	11
1511	Carmo de Minas	11
1512	Carmo do Cajuru	11
1513	Carmo do Paranaíba	11
1514	Carmo do Rio Claro	11
1515	Carmópolis de Minas	11
1516	Carneirinho	11
1517	Carrancas	11
1518	Carvalhópolis	11
1519	Carvalhos	11
1520	Casa Grande	11
1521	Cascalho Rico	11
1522	Cássia	11
1523	Cataguases	11
1524	Catas Altas	11
1525	Catas Altas da Noruega	11
1526	Catuji	11
1527	Catuti	11
1528	Caxambu	11
1529	Cedro do Abaeté	11
1530	Central de Minas	11
1531	Centralina	11
1532	Chácara	11
1533	Chalé	11
1534	Chapada do Norte	11
1535	Chapada Gaúcha	11
1536	Chiador	11
1537	Cipotânea	11
1538	Claraval	11
1539	Claro dos Poções	11
1540	Cláudio	11
1541	Coimbra	11
1542	Coluna	11
1543	Comendador Gomes	11
1544	Comercinho	11
1545	Conceição da Aparecida	11
1546	Conceição da Barra de Minas	11
1547	Conceição das Alagoas	11
1548	Conceição das Pedras	11
1549	Conceição de Ipanema	11
1550	Conceição do Mato Dentro	11
1551	Conceição do Pará	11
1552	Conceição do Rio Verde	11
1553	Conceição dos Ouros	11
1554	Cônego Marinho	11
1555	Confins	11
1556	Congonhal	11
1557	Congonhas	11
1558	Congonhas do Norte	11
1559	Conquista	11
1560	Conselheiro Lafaiete	11
1561	Conselheiro Pena	11
1562	Consolação	11
1563	Contagem	11
1564	Coqueiral	11
1565	Coração de Jesus	11
1566	Cordisburgo	11
1567	Cordislândia	11
1568	Corinto	11
1569	Coroaci	11
1570	Coromandel	11
1571	Coronel Fabriciano	11
1572	Coronel Murta	11
1573	Coronel Pacheco	11
1574	Coronel Xavier Chaves	11
1575	Córrego Danta	11
1576	Córrego do Bom Jesus	11
1577	Córrego Fundo	11
1578	Córrego Novo	11
1579	Couto de Magalhães de Minas	11
1580	Crisólita	11
1581	Cristais	11
1582	Cristália	11
1583	Cristiano Otoni	11
1584	Cristina	11
1585	Crucilândia	11
1586	Cruzeiro da Fortaleza	11
1587	Cruzília	11
1588	Cuparaque	11
1589	Curral de Dentro	11
1590	Curvelo	11
1591	Datas	11
1592	Delfim Moreira	11
1593	Delfinópolis	11
1594	Delta	11
1595	Descoberto	11
1596	Desterro de Entre Rios	11
1597	Desterro do Melo	11
1598	Diamantina	11
1599	Diogo de Vasconcelos	11
1600	Dionísio	11
1601	Divinésia	11
1602	Divino	11
1603	Divino das Laranjeiras	11
1604	Divinolândia de Minas	11
1605	Divinópolis	11
1606	Divisa Alegre	11
1607	Divisa Nova	11
1608	Divisópolis	11
1609	Dom Bosco	11
1610	Dom Cavati	11
1611	Dom Joaquim	11
1612	Dom Silvério	11
1613	Dom Viçoso	11
1614	Dona Euzébia	11
1615	Dores de Campos	11
1616	Dores de Guanhães	11
1617	Dores do Indaiá	11
1618	Dores do Turvo	11
1619	Doresópolis	11
1620	Douradoquara	11
1621	Durandé	11
1622	Elói Mendes	11
1623	Engenheiro Caldas	11
1624	Engenheiro Navarro	11
1625	Entre Folhas	11
1626	Entre Rios de Minas	11
1627	Ervália	11
1628	Esmeraldas	11
1629	Espera Feliz	11
1630	Espinosa	11
1631	Espírito Santo do Dourado	11
1632	Estiva	11
1633	Estrela Dalva	11
1634	Estrela do Indaiá	11
1635	Estrela do Sul	11
1636	Eugenópolis	11
1637	Ewbank da Câmara	11
1638	Extrema	11
1639	Fama	11
1640	Faria Lemos	11
1641	Felício dos Santos	11
1642	Felisburgo	11
1643	Felixlândia	11
1644	Fernandes Tourinho	11
1645	Ferros	11
1646	Fervedouro	11
1647	Florestal	11
1648	Formiga	11
1649	Formoso	11
1650	Fortaleza de Minas	11
1651	Fortuna de Minas	11
1652	Francisco Badaró	11
1653	Francisco Dumont	11
1654	Francisco Sá	11
1655	Franciscópolis	11
1656	Frei Gaspar	11
1657	Frei Inocêncio	11
1658	Frei Lagonegro	11
1659	Fronteira	11
1660	Fronteira dos Vales	11
1661	Fruta de Leite	11
1662	Frutal	11
1663	Funilândia	11
1664	Galiléia	11
1665	Gameleiras	11
1666	Glaucilândia	11
1667	Goiabeira	11
1668	Goianá	11
1669	Gonçalves	11
1670	Gonzaga	11
1671	Gouveia	11
1672	Governador Valadares	11
1673	Grão Mogol	11
1674	Grupiara	11
1675	Guanhães	11
1676	Guapé	11
1677	Guaraciaba	11
1678	Guaraciama	11
1679	Guaranésia	11
1680	Guarani	11
1681	Guarará	11
1682	Guarda-Mor	11
1683	Guaxupé	11
1684	Guidoval	11
1685	Guimarânia	11
1686	Guiricema	11
1687	Gurinhatã	11
1688	Heliodora	11
1689	Iapu	11
1690	Ibertioga	11
1691	Ibiá	11
1692	Ibiaí	11
1693	Ibiracatu	11
1694	Ibiraci	11
1695	Ibirité	11
1696	Ibitiúra de Minas	11
1697	Ibituruna	11
1698	Icaraí de Minas	11
1699	Igarapé	11
1700	Igaratinga	11
1701	Iguatama	11
1702	Ijaci	11
1703	Ilicínea	11
1704	Imbé de Minas	11
1705	Inconfidentes	11
1706	Indaiabira	11
1707	Indianópolis	11
1708	Ingaí	11
1709	Inhapim	11
1710	Inhaúma	11
1711	Inimutaba	11
1712	Ipaba	11
1713	Ipanema	11
1714	Ipatinga	11
1715	Ipiaçu	11
1716	Ipuiúna	11
1717	Iraí de Minas	11
1718	Itabira	11
1719	Itabirinha de Mantena	11
1720	Itabirito	11
1721	Itacambira	11
1722	Itacarambi	11
1723	Itaguara	11
1724	Itaipé	11
1725	Itajubá	11
1726	Itamarandiba	11
1727	Itamarati de Minas	11
1728	Itambacuri	11
1729	Itambé do Mato Dentro	11
1730	Itamogi	11
1731	Itamonte	11
1732	Itanhandu	11
1733	Itanhomi	11
1734	Itaobim	11
1735	Itapagipe	11
1736	Itapecerica	11
1737	Itapeva	11
1738	Itatiaiuçu	11
1739	Itaú de Minas	11
1740	Itaúna	11
1741	Itaverava	11
1742	Itinga	11
1743	Itueta	11
1744	Ituiutaba	11
1745	Itumirim	11
1746	Iturama	11
1747	Itutinga	11
1748	Jaboticatubas	11
1749	Jacinto	11
1750	Jacuí	11
1751	Jacutinga	11
1752	Jaguaraçu	11
1753	Jaíba	11
1754	Jampruca	11
1755	Janaúba	11
1756	Januária	11
1757	Japaraíba	11
1758	Japonvar	11
1759	Jeceaba	11
1760	Jenipapo de Minas	11
1761	Jequeri	11
1762	Jequitaí	11
1763	Jequitibá	11
1764	Jequitinhonha	11
1765	Jesuânia	11
1766	Joaíma	11
1767	Joanésia	11
1768	João Monlevade	11
1769	João Pinheiro	11
1770	Joaquim Felício	11
1771	Jordânia	11
1772	José Gonçalves de Minas	11
1773	José Raydan	11
1774	Josenópolis	11
1775	Juatuba	11
1776	Juiz de Fora	11
1777	Juramento	11
1778	Juruaia	11
1779	Juvenília	11
1780	Ladainha	11
1781	Lagamar	11
1782	Lagoa da Prata	11
1783	Lagoa dos Patos	11
1784	Lagoa Dourada	11
1785	Lagoa Formosa	11
1786	Lagoa Grande	11
1787	Lagoa Santa	11
1788	Lajinha	11
1789	Lambari	11
1790	Lamim	11
1791	Laranjal	11
1792	Lassance	11
1793	Lavras	11
1794	Leandro Ferreira	11
1795	Leme do Prado	11
1796	Leopoldina	11
1797	Liberdade	11
1798	Lima Duarte	11
1799	Limeira do Oeste	11
1800	Lontra	11
1801	Luisburgo	11
1802	Luislândia	11
1803	Luminárias	11
1804	Luz	11
1805	Machacalis	11
1806	Machado	11
1807	Madre de Deus de Minas	11
1808	Malacacheta	11
1809	Mamonas	11
1810	Manga	11
1811	Manhuaçu	11
1812	Manhumirim	11
1813	Mantena	11
1814	Mar de Espanha	11
1815	Maravilhas	11
1816	Maria da Fé	11
1817	Mariana	11
1818	Marilac	11
1819	Mário Campos	11
1820	Maripá de Minas	11
1821	Marliéria	11
1822	Marmelópolis	11
1823	Martinho Campos	11
1824	Martins Soares	11
1825	Mata Verde	11
1826	Materlândia	11
1827	Mateus Leme	11
1828	Mathias Lobato	11
1829	Matias Barbosa	11
1830	Matias Cardoso	11
1831	Matipó	11
1832	Mato Verde	11
1833	Matozinhos	11
1834	Matutina	11
1835	Medeiros	11
1836	Medina	11
1837	Mendes Pimentel	11
1838	Mercês	11
1839	Mesquita	11
1840	Minas Novas	11
1841	Minduri	11
1842	Mirabela	11
1843	Miradouro	11
1844	Miraí	11
1845	Miravânia	11
1846	Moeda	11
1847	Moema	11
1848	Monjolos	11
1849	Monsenhor Paulo	11
1850	Montalvânia	11
1851	Monte Alegre de Minas	11
1852	Monte Azul	11
1853	Monte Belo	11
1854	Monte Carmelo	11
1855	Monte Formoso	11
1856	Monte Santo de Minas	11
1857	Monte Sião	11
1858	Montes Claros	11
1859	Montezuma	11
1860	Morada Nova de Minas	11
1861	Morro da Garça	11
1862	Morro do Pilar	11
1863	Munhoz	11
1864	Muriaé	11
1865	Mutum	11
1866	Muzambinho	11
1867	Nacip Raydan	11
1868	Nanuque	11
1869	Naque	11
1870	Natalândia	11
1871	Natércia	11
1872	Nazareno	11
1873	Nepomuceno	11
1874	Ninheira	11
1875	Nova Belém	11
1876	Nova Era	11
1877	Nova Lima	11
1878	Nova Módica	11
1879	Nova Ponte	11
1880	Nova Porteirinha	11
1881	Nova Resende	11
1882	Nova Serrana	11
1883	Nova União	11
1884	Novo Cruzeiro	11
1885	Novo Oriente de Minas	11
1886	Novorizonte	11
1887	Olaria	11
1888	Olhos-d'Água	11
1889	Olímpio Noronha	11
1890	Oliveira	11
1891	Oliveira Fortes	11
1892	Onça de Pitangui	11
1893	Oratórios	11
1894	Orizânia	11
1895	Ouro Branco	11
1896	Ouro Fino	11
1897	Ouro Preto	11
1898	Ouro Verde de Minas	11
1899	Padre Carvalho	11
1900	Padre Paraíso	11
1901	Pai Pedro	11
1902	Paineiras	11
1903	Pains	11
1904	Paiva	11
1905	Palma	11
1906	Palmópolis	11
1907	Papagaios	11
1908	Pará de Minas	11
1909	Paracatu	11
1910	Paraguaçu	11
1911	Paraisópolis	11
1912	Paraopeba	11
1913	Passa Quatro	11
1914	Passa Tempo	11
1915	Passa-Vinte	11
1916	Passabém	11
1917	Passos	11
1918	Patis	11
1919	Patos de Minas	11
1920	Patrocínio	11
1921	Patrocínio do Muriaé	11
1922	Paula Cândido	11
1923	Paulistas	11
1924	Pavão	11
1925	Peçanha	11
1926	Pedra Azul	11
1927	Pedra Bonita	11
1928	Pedra do Anta	11
1929	Pedra do Indaiá	11
1930	Pedra Dourada	11
1931	Pedralva	11
1932	Pedras de Maria da Cruz	11
1933	Pedrinópolis	11
1934	Pedro Leopoldo	11
1935	Pedro Teixeira	11
1936	Pequeri	11
1937	Pequi	11
1938	Perdigão	11
1939	Perdizes	11
1940	Perdões	11
1941	Periquito	11
1942	Pescador	11
1943	Piau	11
1944	Piedade de Caratinga	11
1945	Piedade de Ponte Nova	11
1946	Piedade do Rio Grande	11
1947	Piedade dos Gerais	11
1948	Pimenta	11
1949	Pingo-d'Água	11
1950	Pintópolis	11
1951	Piracema	11
1952	Pirajuba	11
1953	Piranga	11
1954	Piranguçu	11
1955	Piranguinho	11
1956	Pirapetinga	11
1957	Pirapora	11
1958	Piraúba	11
1959	Pitangui	11
1960	Piumhi	11
1961	Planura	11
1962	Poço Fundo	11
1963	Poços de Caldas	11
1964	Pocrane	11
1965	Pompéu	11
1966	Ponte Nova	11
1967	Ponto Chique	11
1968	Ponto dos Volantes	11
1969	Porteirinha	11
1970	Porto Firme	11
1971	Poté	11
1972	Pouso Alegre	11
1973	Pouso Alto	11
1974	Prados	11
1975	Prata	11
1976	Pratápolis	11
1977	Pratinha	11
1978	Presidente Bernardes	11
1979	Presidente Juscelino	11
1980	Presidente Kubitschek	11
1981	Presidente Olegário	11
1982	Prudente de Morais	11
1983	Quartel Geral	11
1984	Queluzito	11
1985	Raposos	11
1986	Raul Soares	11
1987	Recreio	11
1988	Reduto	11
1989	Resende Costa	11
1990	Resplendor	11
1991	Ressaquinha	11
1992	Riachinho	11
1993	Riacho dos Machados	11
1994	Ribeirão das Neves	11
1995	Ribeirão Vermelho	11
1996	Rio Acima	11
1997	Rio Casca	11
1998	Rio do Prado	11
1999	Rio Doce	11
2000	Rio Espera	11
2001	Rio Manso	11
2002	Rio Novo	11
2003	Rio Paranaíba	11
2004	Rio Pardo de Minas	11
2005	Rio Piracicaba	11
2006	Rio Pomba	11
2007	Rio Preto	11
2008	Rio Vermelho	11
2009	Ritápolis	11
2010	Rochedo de Minas	11
2011	Rodeiro	11
2012	Romaria	11
2013	Rosário da Limeira	11
2014	Rubelita	11
2015	Rubim	11
2016	Sabará	11
2017	Sabinópolis	11
2018	Sacramento	11
2019	Salinas	11
2020	Salto da Divisa	11
2021	Santa Bárbara	11
2022	Santa Bárbara do Leste	11
2023	Santa Bárbara do Monte Verde	11
2024	Santa Bárbara do Tugúrio	11
2025	Santa Cruz de Minas	11
2026	Santa Cruz de Salinas	11
2027	Santa Cruz do Escalvado	11
2028	Santa Efigênia de Minas	11
2029	Santa Fé de Minas	11
2030	Santa Helena de Minas	11
2031	Santa Juliana	11
2032	Santa Luzia	11
2033	Santa Margarida	11
2034	Santa Maria de Itabira	11
2035	Santa Maria do Salto	11
2036	Santa Maria do Suaçuí	11
2037	Santa Rita de Caldas	11
2038	Santa Rita de Ibitipoca	11
2039	Santa Rita de Jacutinga	11
2040	Santa Rita de Minas	11
2041	Santa Rita do Itueto	11
2042	Santa Rita do Sapucaí	11
2043	Santa Rosa da Serra	11
2044	Santa Vitória	11
2045	Santana da Vargem	11
2046	Santana de Cataguases	11
2047	Santana de Pirapama	11
2048	Santana do Deserto	11
2049	Santana do Garambéu	11
2050	Santana do Jacaré	11
2051	Santana do Manhuaçu	11
2052	Santana do Paraíso	11
2053	Santana do Riacho	11
2054	Santana dos Montes	11
2055	Santo Antônio do Amparo	11
2056	Santo Antônio do Aventureiro	11
2057	Santo Antônio do Grama	11
2058	Santo Antônio do Itambé	11
2059	Santo Antônio do Jacinto	11
2060	Santo Antônio do Monte	11
2061	Santo Antônio do Retiro	11
2062	Santo Antônio do Rio Abaixo	11
2063	Santo Hipólito	11
2064	Santos Dumont	11
2065	São Bento Abade	11
2066	São Brás do Suaçuí	11
2067	São Domingos das Dores	11
2068	São Domingos do Prata	11
2069	São Félix de Minas	11
2070	São Francisco	11
2071	São Francisco de Paula	11
2072	São Francisco de Sales	11
2073	São Francisco do Glória	11
2074	São Geraldo	11
2075	São Geraldo da Piedade	11
2076	São Geraldo do Baixio	11
2077	São Gonçalo do Abaeté	11
2078	São Gonçalo do Pará	11
2079	São Gonçalo do Rio Abaixo	11
2080	São Gonçalo do Rio Preto	11
2081	São Gonçalo do Sapucaí	11
2082	São Gotardo	11
2083	São João Batista do Glória	11
2084	São João da Lagoa	11
2085	São João da Mata	11
2086	São João da Ponte	11
2087	São João das Missões	11
2088	São João del Rei	11
2089	São João do Manhuaçu	11
2090	São João do Manteninha	11
2091	São João do Oriente	11
2092	São João do Pacuí	11
2093	São João do Paraíso	11
2094	São João Evangelista	11
2095	São João Nepomuceno	11
2096	São Joaquim de Bicas	11
2097	São José da Barra	11
2098	São José da Lapa	11
2099	São José da Safira	11
2100	São José da Varginha	11
2101	São José do Alegre	11
2102	São José do Divino	11
2103	São José do Goiabal	11
2104	São José do Jacuri	11
2105	São José do Mantimento	11
2106	São Lourenço	11
2107	São Miguel do Anta	11
2108	São Pedro da União	11
2109	São Pedro do Suaçuí	11
2110	São Pedro dos Ferros	11
2111	São Romão	11
2112	São Roque de Minas	11
2113	São Sebastião da Bela Vista	11
2114	São Sebastião da Vargem Alegre	11
2115	São Sebastião do Anta	11
2116	São Sebastião do Maranhão	11
2117	São Sebastião do Oeste	11
2118	São Sebastião do Paraíso	11
2119	São Sebastião do Rio Preto	11
2120	São Sebastião do Rio Verde	11
2121	São Thomé das Letras	11
2122	São Tiago	11
2123	São Tomás de Aquino	11
2124	São Vicente de Minas	11
2125	Sapucaí-Mirim	11
2126	Sardoá	11
2127	Sarzedo	11
2128	Sem-Peixe	11
2129	Senador Amaral	11
2130	Senador Cortes	11
2131	Senador Firmino	11
2132	Senador José Bento	11
2133	Senador Modestino Gonçalves	11
2134	Senhora de Oliveira	11
2135	Senhora do Porto	11
2136	Senhora dos Remédios	11
2137	Sericita	11
2138	Seritinga	11
2139	Serra Azul de Minas	11
2140	Serra da Saudade	11
2141	Serra do Salitre	11
2142	Serra dos Aimorés	11
2143	Serrania	11
2144	Serranópolis de Minas	11
2145	Serranos	11
2146	Serro	11
2147	Sete Lagoas	11
2148	Setubinha	11
2149	Silveirânia	11
2150	Silvianópolis	11
2151	Simão Pereira	11
2152	Simonésia	11
2153	Sobrália	11
2154	Soledade de Minas	11
2155	Tabuleiro	11
2156	Taiobeiras	11
2157	Taparuba	11
2158	Tapira	11
2159	Tapiraí	11
2160	Taquaraçu de Minas	11
2161	Tarumirim	11
2162	Teixeiras	11
2163	Teófilo Otoni	11
2164	Timóteo	11
2165	Tiradentes	11
2166	Tiros	11
2167	Tocantins	11
2168	Tocos do Moji	11
2169	Toledo	11
2170	Tombos	11
2171	Três Corações	11
2172	Três Marias	11
2173	Três Pontas	11
2174	Tumiritinga	11
2175	Tupaciguara	11
2176	Turmalina	11
2177	Turvolândia	11
2178	Ubá	11
2179	Ubaí	11
2180	Ubaporanga	11
2181	Uberaba	11
2182	Uberlândia	11
2183	Umburatiba	11
2184	Unaí	11
2185	União de Minas	11
2186	Uruana de Minas	11
2187	Urucânia	11
2188	Urucuia	11
2189	Vargem Alegre	11
2190	Vargem Bonita	11
2191	Vargem Grande do Rio Pardo	11
2192	Varginha	11
2193	Varjão de Minas	11
2194	Várzea da Palma	11
2195	Varzelândia	11
2196	Vazante	11
2197	Verdelândia	11
2198	Veredinha	11
2199	Veríssimo	11
2200	Vermelho Novo	11
2201	Vespasiano	11
2202	Viçosa	11
2203	Vieiras	11
2204	Virgem da Lapa	11
2205	Virgínia	11
2206	Virginópolis	11
2207	Virgolândia	11
2208	Visconde do Rio Branco	11
2209	Volta Grande	11
2210	Wenceslau Braz	11
2211	Água Clara	12
2212	Alcinópolis	12
2213	Amambaí	12
2214	Anastácio	12
2215	Anaurilândia	12
2216	Angélica	12
2217	Antônio João	12
2218	Aparecida do Taboado	12
2219	Aquidauana	12
2220	Aral Moreira	12
2221	Bandeirantes	12
2222	Bataguassu	12
2223	Bataiporã	12
2224	Bela Vista	12
2225	Bodoquena	12
2226	Bonito	12
2227	Brasilândia	12
2228	Caarapó	12
2229	Camapuã	12
2230	Campo Grande	12
2231	Caracol	12
2232	Cassilândia	12
2233	Chapadão do Sul	12
2234	Corguinho	12
2235	Coronel Sapucaia	12
2236	Corumbá	12
2237	Costa Rica	12
2238	Coxim	12
2239	Deodápolis	12
2240	Dois Irmãos do Buriti	12
2241	Douradina	12
2242	Dourados	12
2243	Eldorado	12
2244	Fátima do Sul	12
2245	Glória de Dourados	12
2246	Guia Lopes da Laguna	12
2247	Iguatemi	12
2248	Inocência	12
2249	Itaporã	12
2250	Itaquiraí	12
2251	Ivinhema	12
2252	Japorã	12
2253	Jaraguari	12
2254	Jardim	12
2255	Jateí	12
2256	Juti	12
2257	Ladário	12
2258	Laguna Carapã	12
2259	Maracaju	12
2260	Miranda	12
2261	Mundo Novo	12
2262	Naviraí	12
2263	Nioaque	12
2264	Nova Alvorada do Sul	12
2265	Nova Andradina	12
2266	Novo Horizonte do Sul	12
2267	Paranaíba	12
2268	Paranhos	12
2269	Pedro Gomes	12
2270	Ponta Porã	12
2271	Porto Murtinho	12
2272	Ribas do Rio Pardo	12
2273	Rio Brilhante	12
2274	Rio Negro	12
2275	Rio Verde de Mato Grosso	12
2276	Rochedo	12
2277	Santa Rita do Pardo	12
2278	São Gabriel do Oeste	12
2279	Selvíria	12
2280	Sete Quedas	12
2281	Sidrolândia	12
2282	Sonora	12
2283	Tacuru	12
2284	Taquarussu	12
2285	Terenos	12
2286	Três Lagoas	12
2287	Vicentina	12
2288	Acorizal	13
2289	Água Boa	13
2290	Alta Floresta	13
2291	Alto Araguaia	13
2292	Alto Boa Vista	13
2293	Alto Garças	13
2294	Alto Paraguai	13
2295	Alto Taquari	13
2296	Apiacás	13
2297	Araguaiana	13
2298	Araguainha	13
2299	Araputanga	13
2300	Arenápolis	13
2301	Aripuanã	13
2302	Barão de Melgaço	13
2303	Barra do Bugres	13
2304	Barra do Garças	13
2305	Bom Jesus do Araguaia	13
2306	Brasnorte	13
2307	Cáceres	13
2308	Campinápolis	13
2309	Campo Novo do Parecis	13
2310	Campo Verde	13
2311	Campos de Júlio	13
2312	Canabrava do Norte	13
2313	Canarana	13
2314	Carlinda	13
2315	Castanheira	13
2316	Chapada dos Guimarães	13
2317	Cláudia	13
2318	Cocalinho	13
2319	Colíder	13
2320	Colniza	13
2321	Comodoro	13
2322	Confresa	13
2323	Conquista d'Oeste	13
2324	Cotriguaçu	13
2325	Curvelândia	13
2326	Cuiabá	13
2327	Denise	13
2328	Diamantino	13
2329	Dom Aquino	13
2330	Feliz Natal	13
2331	Figueirópolis d'Oeste	13
2332	Gaúcha do Norte	13
2333	General Carneiro	13
2334	Glória d'Oeste	13
2335	Guarantã do Norte	13
2336	Guiratinga	13
2337	Indiavaí	13
2338	Itaúba	13
2339	Itiquira	13
2340	Jaciara	13
2341	Jangada	13
2342	Jauru	13
2343	Juara	13
2344	Juína	13
2345	Juruena	13
2346	Juscimeira	13
2347	Lambari d'Oeste	13
2348	Lucas do Rio Verde	13
2349	Luciára	13
2350	Marcelândia	13
2351	Matupá	13
2352	Mirassol d'Oeste	13
2353	Nobres	13
2354	Nortelândia	13
2355	Nossa Senhora do Livramento	13
2356	Nova Bandeirantes	13
2357	Nova Brasilândia	13
2358	Nova Canãa do Norte	13
2359	Nova Guarita	13
2360	Nova Lacerda	13
2361	Nova Marilândia	13
2362	Nova Maringá	13
2363	Nova Monte Verde	13
2364	Nova Mutum	13
2365	Nova Nazaré	13
2366	Nova Olímpia	13
2367	Nova Santa Helena	13
2368	Nova Ubiratã	13
2369	Nova Xavantina	13
2370	Novo Horizonte do Norte	13
2371	Novo Mundo	13
2372	Novo Santo Antônio	13
2373	Novo São Joaquim	13
2374	Paranaíta	13
2375	Paranatinga	13
2376	Pedra Preta	13
2377	Peixoto de Azevedo	13
2378	Planalto da Serra	13
2379	Poconé	13
2380	Pontal do Araguaia	13
2381	Ponte Branca	13
2382	Pontes e Lacerda	13
2383	Porto Alegre do Norte	13
2384	Porto dos Gaúchos	13
2385	Porto Esperidião	13
2386	Porto Estrela	13
2387	Poxoréo	13
2388	Primavera do Leste	13
2389	Querência	13
2390	Reserva do Cabaçal	13
2391	Ribeirão Cascalheira	13
2392	Ribeirãozinho	13
2393	Rio Branco	13
2394	Rondolândia	13
2395	Rondonópolis	13
2396	Rosário Oeste	13
2397	Salto do Céu	13
2398	Santa Carmem	13
2399	Santa Cruz do Xingu	13
2400	Santa Rita do Trivelato	13
2401	Santa Terezinha	13
2402	Santo Afonso	13
2403	Santo Antônio do Leste	13
2404	Santo Antônio do Leverger	13
2405	São Félix do Araguaia	13
2406	São José do Povo	13
2407	São José do Rio Claro	13
2408	São José do Xingu	13
2409	São José dos Quatro Marcos	13
2410	São Pedro da Cipa	13
2411	Sapezal	13
2412	Serra Nova Dourada	13
2413	Sinop	13
2414	Sorriso	13
2415	Tabaporã	13
2416	Tangará da Serra	13
2417	Tapurah	13
2418	Terra Nova do Norte	13
2419	Tesouro	13
2420	Torixoréu	13
2421	União do Sul	13
2422	Vale de São Domingos	13
2423	Várzea Grande	13
2424	Vera	13
2425	Vila Bela da Santíssima Trindade	13
2426	Vila Rica	13
2427	Abaetetuba	14
2428	Abel Figueiredo	14
2429	Acará	14
2430	Afuá	14
2431	Água Azul do Norte	14
2432	Alenquer	14
2433	Almeirim	14
2434	Altamira	14
2435	Anajás	14
2436	Ananindeua	14
2437	Anapu	14
2438	Augusto Corrêa	14
2439	Aurora do Pará	14
2440	Aveiro	14
2441	Bagre	14
2442	Baião	14
2443	Bannach	14
2444	Barcarena	14
2445	Belém	14
2446	Belterra	14
2447	Benevides	14
2448	Bom Jesus do Tocantins	14
2449	Bonito	14
2450	Bragança	14
2451	Brasil Novo	14
2452	Brejo Grande do Araguaia	14
2453	Breu Branco	14
2454	Breves	14
2455	Bujaru	14
2456	Cachoeira do Arari	14
2457	Cachoeira do Piriá	14
2458	Cametá	14
2459	Canaã dos Carajás	14
2460	Capanema	14
2461	Capitão Poço	14
2462	Castanhal	14
2463	Chaves	14
2464	Colares	14
2465	Conceição do Araguaia	14
2466	Concórdia do Pará	14
2467	Cumaru do Norte	14
2468	Curionópolis	14
2469	Curralinho	14
2470	Curuá	14
2471	Curuçá	14
2472	Dom Eliseu	14
2473	Eldorado dos Carajás	14
2474	Faro	14
2475	Floresta do Araguaia	14
2476	Garrafão do Norte	14
2477	Goianésia do Pará	14
2478	Gurupá	14
2479	Igarapé-Açu	14
2480	Igarapé-Miri	14
2481	Inhangapi	14
2482	Ipixuna do Pará	14
2483	Irituia	14
2484	Itaituba	14
2485	Itupiranga	14
2486	Jacareacanga	14
2487	Jacundá	14
2488	Juruti	14
2489	Limoeiro do Ajuru	14
2490	Mãe do Rio	14
2491	Magalhães Barata	14
2492	Marabá	14
2493	Maracanã	14
2494	Marapanim	14
2495	Marituba	14
2496	Medicilândia	14
2497	Melgaço	14
2498	Mocajuba	14
2499	Moju	14
2500	Monte Alegre	14
2501	Muaná	14
2502	Nova Esperança do Piriá	14
2503	Nova Ipixuna	14
2504	Nova Timboteua	14
2505	Novo Progresso	14
2506	Novo Repartimento	14
2507	Óbidos	14
2508	Oeiras do Pará	14
2509	Oriximiná	14
2510	Ourém	14
2511	Ourilândia do Norte	14
2512	Pacajá	14
2513	Palestina do Pará	14
2514	Paragominas	14
2515	Parauapebas	14
2516	Pau d'Arco	14
2517	Peixe-Boi	14
2518	Piçarra	14
2519	Placas	14
2520	Ponta de Pedras	14
2521	Portel	14
2522	Porto de Moz	14
2523	Prainha	14
2524	Primavera	14
2525	Quatipuru	14
2526	Redenção	14
2527	Rio Maria	14
2528	Rondon do Pará	14
2529	Rurópolis	14
2530	Salinópolis	14
2531	Salvaterra	14
2532	Santa Bárbara do Pará	14
2533	Santa Cruz do Arari	14
2534	Santa Isabel do Pará	14
2535	Santa Luzia do Pará	14
2536	Santa Maria das Barreiras	14
2537	Santa Maria do Pará	14
2538	Santana do Araguaia	14
2539	Santarém	14
2540	Santarém Novo	14
2541	Santo Antônio do Tauá	14
2542	São Caetano de Odivela	14
2543	São Domingos do Araguaia	14
2544	São Domingos do Capim	14
2545	São Félix do Xingu	14
2546	São Francisco do Pará	14
2547	São Geraldo do Araguaia	14
2548	São João da Ponta	14
2549	São João de Pirabas	14
2550	São João do Araguaia	14
2551	São Miguel do Guamá	14
2552	São Sebastião da Boa Vista	14
2553	Sapucaia	14
2554	Senador José Porfírio	14
2555	Soure	14
2556	Tailândia	14
2557	Terra Alta	14
2558	Terra Santa	14
2559	Tomé-Açu	14
2560	Tracuateua	14
2561	Trairão	14
2562	Tucumã	14
2563	Tucuruí	14
2564	Ulianópolis	14
2565	Uruará	14
2566	Vigia	14
2567	Viseu	14
2568	Vitória do Xingu	14
2569	Xinguara	14
2570	Água Branca	15
2571	Aguiar	15
2572	Alagoa Grande	15
2573	Alagoa Nova	15
2574	Alagoinha	15
2575	Alcantil	15
2576	Algodão de Jandaíra	15
2577	Alhandra	15
2578	Amparo	15
2579	Aparecida	15
2580	Araçagi	15
2581	Arara	15
2582	Araruna	15
2583	Areia	15
2584	Areia de Baraúnas	15
2585	Areial	15
2586	Aroeiras	15
2587	Assunção	15
2588	Baía da Traição	15
2589	Bananeiras	15
2590	Baraúna	15
2591	Barra de Santa Rosa	15
2592	Barra de Santana	15
2593	Barra de São Miguel	15
2594	Bayeux	15
2595	Belém	15
2596	Belém do Brejo do Cruz	15
2597	Bernardino Batista	15
2598	Boa Ventura	15
2599	Boa Vista	15
2600	Bom Jesus	15
2601	Bom Sucesso	15
2602	Bonito de Santa Fé	15
2603	Boqueirão	15
2604	Borborema	15
2605	Brejo do Cruz	15
2606	Brejo dos Santos	15
2607	Caaporã	15
2608	Cabaceiras	15
2609	Cabedelo	15
2610	Cachoeira dos Índios	15
2611	Cacimba de Areia	15
2612	Cacimba de Dentro	15
2613	Cacimbas	15
2614	Caiçara	15
2615	Cajazeiras	15
2616	Cajazeirinhas	15
2617	Caldas Brandão	15
2618	Camalaú	15
2619	Campina Grande	15
2620	Campo de Santana	15
2621	Capim	15
2622	Caraúbas	15
2623	Carrapateira	15
2624	Casserengue	15
2625	Catingueira	15
2626	Catolé do Rocha	15
2627	Caturité	15
2628	Conceição	15
2629	Condado	15
2630	Conde	15
2631	Congo	15
2632	Coremas	15
2633	Coxixola	15
2634	Cruz do Espírito Santo	15
2635	Cubati	15
2636	Cuité	15
2637	Cuité de Mamanguape	15
2638	Cuitegi	15
2639	Curral de Cima	15
2640	Curral Velho	15
2641	Damião	15
2642	Desterro	15
2643	Diamante	15
2644	Dona Inês	15
2645	Duas Estradas	15
2646	Emas	15
2647	Esperança	15
2648	Fagundes	15
2649	Frei Martinho	15
2650	Gado Bravo	15
2651	Guarabira	15
2652	Gurinhém	15
2653	Gurjão	15
2654	Ibiara	15
2655	Igaracy	15
2656	Imaculada	15
2657	Ingá	15
2658	Itabaiana	15
2659	Itaporanga	15
2660	Itapororoca	15
2661	Itatuba	15
2662	Jacaraú	15
2663	Jericó	15
2664	João Pessoa	15
2665	Juarez Távora	15
2666	Juazeirinho	15
2667	Junco do Seridó	15
2668	Juripiranga	15
2669	Juru	15
2670	Lagoa	15
2671	Lagoa de Dentro	15
2672	Lagoa Seca	15
2673	Lastro	15
2674	Livramento	15
2675	Logradouro	15
2676	Lucena	15
2677	Mãe d'Água	15
2678	Malta	15
2679	Mamanguape	15
2680	Manaíra	15
2681	Marcação	15
2682	Mari	15
2683	Marizópolis	15
2684	Massaranduba	15
2685	Mataraca	15
2686	Matinhas	15
2687	Mato Grosso	15
2688	Maturéia	15
2689	Mogeiro	15
2690	Montadas	15
2691	Monte Horebe	15
2692	Monteiro	15
2693	Mulungu	15
2694	Natuba	15
2695	Nazarezinho	15
2696	Nova Floresta	15
2697	Nova Olinda	15
2698	Nova Palmeira	15
2699	Olho d'Água	15
2700	Olivedos	15
2701	Ouro Velho	15
2702	Parari	15
2703	Passagem	15
2704	Patos	15
2705	Paulista	15
2706	Pedra Branca	15
2707	Pedra Lavrada	15
2708	Pedras de Fogo	15
2709	Pedro Régis	15
2710	Piancó	15
2711	Picuí	15
2712	Pilar	15
2713	Pilões	15
2714	Pilõezinhos	15
2715	Pirpirituba	15
2716	Pitimbu	15
2717	Pocinhos	15
2718	Poço Dantas	15
2719	Poço de José de Moura	15
2720	Pombal	15
2721	Prata	15
2722	Princesa Isabel	15
2723	Puxinanã	15
2724	Queimadas	15
2725	Quixabá	15
2726	Remígio	15
2727	Riachão	15
2728	Riachão do Bacamarte	15
2729	Riachão do Poço	15
2730	Riacho de Santo Antônio	15
2731	Riacho dos Cavalos	15
2732	Rio Tinto	15
2733	Salgadinho	15
2734	Salgado de São Félix	15
2735	Santa Cecília	15
2736	Santa Cruz	15
2737	Santa Helena	15
2738	Santa Inês	15
2739	Santa Luzia	15
2740	Santa Rita	15
2741	Santa Teresinha	15
2742	Santana de Mangueira	15
2743	Santana dos Garrotes	15
2744	Santarém	15
2745	Santo André	15
2746	São Bentinho	15
2747	São Bento	15
2748	São Domingos de Pombal	15
2749	São Domingos do Cariri	15
2750	São Francisco	15
2751	São João do Cariri	15
2752	São João do Rio do Peixe	15
2753	São João do Tigre	15
2754	São José da Lagoa Tapada	15
2755	São José de Caiana	15
2756	São José de Espinharas	15
2757	São José de Piranhas	15
2758	São José de Princesa	15
2759	São José do Bonfim	15
2760	São José do Brejo do Cruz	15
2761	São José do Sabugi	15
2762	São José dos Cordeiros	15
2763	São José dos Ramos	15
2764	São Mamede	15
2765	São Miguel de Taipu	15
2766	São Sebastião de Lagoa de Roça	15
2767	São Sebastião do Umbuzeiro	15
2768	Sapé	15
2769	Seridó	15
2770	Serra Branca	15
2771	Serra da Raiz	15
2772	Serra Grande	15
2773	Serra Redonda	15
2774	Serraria	15
2775	Sertãozinho	15
2776	Sobrado	15
2777	Solânea	15
2778	Soledade	15
2779	Sossêgo	15
2780	Sousa	15
2781	Sumé	15
2782	Taperoá	15
2783	Tavares	15
2784	Teixeira	15
2785	Tenório	15
2786	Triunfo	15
2787	Uiraúna	15
2788	Umbuzeiro	15
2789	Várzea	15
2790	Vieirópolis	15
2791	Vista Serrana	15
2792	Zabelê	15
2793	Abreu e Lima	16
2794	Afogados da Ingazeira	16
2795	Afrânio	16
2796	Agrestina	16
2797	Água Preta	16
2798	Águas Belas	16
2799	Alagoinha	16
2800	Aliança	16
2801	Altinho	16
2802	Amaraji	16
2803	Angelim	16
2804	Araçoiaba	16
2805	Araripina	16
2806	Arcoverde	16
2807	Barra de Guabiraba	16
2808	Barreiros	16
2809	Belém de Maria	16
2810	Belém de São Francisco	16
2811	Belo Jardim	16
2812	Betânia	16
2813	Bezerros	16
2814	Bodocó	16
2815	Bom Conselho	16
2816	Bom Jardim	16
2817	Bonito	16
2818	Brejão	16
2819	Brejinho	16
2820	Brejo da Madre de Deus	16
2821	Buenos Aires	16
2822	Buíque	16
2823	Cabo de Santo Agostinho	16
2824	Cabrobó	16
2825	Cachoeirinha	16
2826	Caetés	16
2827	Calçado	16
2828	Calumbi	16
2829	Camaragibe	16
2830	Camocim de São Félix	16
2831	Camutanga	16
2832	Canhotinho	16
2833	Capoeiras	16
2834	Carnaíba	16
2835	Carnaubeira da Penha	16
2836	Carpina	16
2837	Caruaru	16
2838	Casinhas	16
2839	Catende	16
2840	Cedro	16
2841	Chã de Alegria	16
2842	Chã Grande	16
2843	Condado	16
2844	Correntes	16
2845	Cortês	16
2846	Cumaru	16
2847	Cupira	16
2848	Custódia	16
2849	Dormentes	16
2850	Escada	16
2851	Exu	16
2852	Feira Nova	16
2853	Fernando de Noronha	16
2854	Ferreiros	16
2855	Flores	16
2856	Floresta	16
2857	Frei Miguelinho	16
2858	Gameleira	16
2859	Garanhuns	16
2860	Glória do Goitá	16
2861	Goiana	16
2862	Granito	16
2863	Gravatá	16
2864	Iati	16
2865	Ibimirim	16
2866	Ibirajuba	16
2867	Igarassu	16
2868	Iguaraci	16
2869	Inajá	16
2870	Ingazeira	16
2871	Ipojuca	16
2872	Ipubi	16
2873	Itacuruba	16
2874	Itaíba	16
2875	Itamaracá	16
2876	Itambé	16
2877	Itapetim	16
2878	Itapissuma	16
2879	Itaquitinga	16
2880	Jaboatão dos Guararapes	16
2881	Jaqueira	16
2882	Jataúba	16
2883	Jatobá	16
2884	João Alfredo	16
2885	Joaquim Nabuco	16
2886	Jucati	16
2887	Jupi	16
2888	Jurema	16
2889	Lagoa do Carro	16
2890	Lagoa do Itaenga	16
2891	Lagoa do Ouro	16
2892	Lagoa dos Gatos	16
2893	Lagoa Grande	16
2894	Lajedo	16
2895	Limoeiro	16
2896	Macaparana	16
2897	Machados	16
2898	Manari	16
2899	Maraial	16
2900	Mirandiba	16
2901	Moreilândia	16
2902	Moreno	16
2903	Nazaré da Mata	16
2904	Olinda	16
2905	Orobó	16
2906	Orocó	16
2907	Ouricuri	16
2908	Palmares	16
2909	Palmeirina	16
2910	Panelas	16
2911	Paranatama	16
2912	Parnamirim	16
2913	Passira	16
2914	Paudalho	16
2915	Paulista	16
2916	Pedra	16
2917	Pesqueira	16
2918	Petrolândia	16
2919	Petrolina	16
2920	Poção	16
2921	Pombos	16
2922	Primavera	16
2923	Quipapá	16
2924	Quixaba	16
2925	Recife	16
2926	Riacho das Almas	16
2927	Ribeirão	16
2928	Rio Formoso	16
2929	Sairé	16
2930	Salgadinho	16
2931	Salgueiro	16
2932	Saloá	16
2933	Sanharó	16
2934	Santa Cruz	16
2935	Santa Cruz da Baixa Verde	16
2936	Santa Cruz do Capibaribe	16
2937	Santa Filomena	16
2938	Santa Maria da Boa Vista	16
2939	Santa Maria do Cambucá	16
2940	Santa Terezinha	16
2941	São Benedito do Sul	16
2942	São Bento do Una	16
2943	São Caitano	16
2944	São João	16
2945	São Joaquim do Monte	16
2946	São José da Coroa Grande	16
2947	São José do Belmonte	16
2948	São José do Egito	16
2949	São Lourenço da Mata	16
2950	São Vicente Ferrer	16
2951	Serra Talhada	16
2952	Serrita	16
2953	Sertânia	16
2954	Sirinhaém	16
2955	Solidão	16
2956	Surubim	16
2957	Tabira	16
2958	Tacaimbó	16
2959	Tacaratu	16
2960	Tamandaré	16
2961	Taquaritinga do Norte	16
2962	Terezinha	16
2963	Terra Nova	16
2964	Timbaúba	16
2965	Toritama	16
2966	Tracunhaém	16
2967	Trindade	16
2968	Triunfo	16
2969	Tupanatinga	16
2970	Tuparetama	16
2971	Venturosa	16
2972	Verdejante	16
2973	Vertente do Lério	16
2974	Vertentes	16
2975	Vicência	16
2976	Vitória de Santo Antão	16
2977	Xexéu	16
2978	Acauã	17
2979	Agricolândia	17
2980	Água Branca	17
2981	Alagoinha do Piauí	17
2982	Alegrete do Piauí	17
2983	Alto Longá	17
2984	Altos	17
2985	Alvorada do Gurguéia	17
2986	Amarante	17
2987	Angical do Piauí	17
2988	Anísio de Abreu	17
2989	Antônio Almeida	17
2990	Aroazes	17
2991	Arraial	17
2992	Assunção do Piauí	17
2993	Avelino Lopes	17
2994	Baixa Grande do Ribeiro	17
2995	Barra d'Alcântara	17
2996	Barras	17
2997	Barreiras do Piauí	17
2998	Barro Duro	17
2999	Batalha	17
3000	Bela Vista do Piauí	17
3001	Belém do Piauí	17
3002	Beneditinos	17
3003	Bertolínia	17
3004	Betânia do Piauí	17
3005	Boa Hora	17
3006	Bocaina	17
3007	Bom Jesus	17
3008	Bom Princípio do Piauí	17
3009	Bonfim do Piauí	17
3010	Boqueirão do Piauí	17
3011	Brasileira	17
3012	Brejo do Piauí	17
3013	Buriti dos Lopes	17
3014	Buriti dos Montes	17
3015	Cabeceiras do Piauí	17
3016	Cajazeiras do Piauí	17
3017	Cajueiro da Praia	17
3018	Caldeirão Grande do Piauí	17
3019	Campinas do Piauí	17
3020	Campo Alegre do Fidalgo	17
3021	Campo Grande do Piauí	17
3022	Campo Largo do Piauí	17
3023	Campo Maior	17
3024	Canavieira	17
3025	Canto do Buriti	17
3026	Capitão de Campos	17
3027	Capitão Gervásio Oliveira	17
3028	Caracol	17
3029	Caraúbas do Piauí	17
3030	Caridade do Piauí	17
3031	Castelo do Piauí	17
3032	Caxingó	17
3033	Cocal	17
3034	Cocal de Telha	17
3035	Cocal dos Alves	17
3036	Coivaras	17
3037	Colônia do Gurguéia	17
3038	Colônia do Piauí	17
3039	Conceição do Canindé	17
3040	Coronel José Dias	17
3041	Corrente	17
3042	Cristalândia do Piauí	17
3043	Cristino Castro	17
3044	Curimatá	17
3045	Currais	17
3046	Curral Novo do Piauí	17
3047	Curralinhos	17
3048	Demerval Lobão	17
3049	Dirceu Arcoverde	17
3050	Dom Expedito Lopes	17
3051	Dom Inocêncio	17
3052	Domingos Mourão	17
3053	Elesbão Veloso	17
3054	Eliseu Martins	17
3055	Esperantina	17
3056	Fartura do Piauí	17
3057	Flores do Piauí	17
3058	Floresta do Piauí	17
3059	Floriano	17
3060	Francinópolis	17
3061	Francisco Ayres	17
3062	Francisco Macedo	17
3063	Francisco Santos	17
3064	Fronteiras	17
3065	Geminiano	17
3066	Gilbués	17
3067	Guadalupe	17
3068	Guaribas	17
3069	Hugo Napoleão	17
3070	Ilha Grande	17
3071	Inhuma	17
3072	Ipiranga do Piauí	17
3073	Isaías Coelho	17
3074	Itainópolis	17
3075	Itaueira	17
3076	Jacobina do Piauí	17
3077	Jaicós	17
3078	Jardim do Mulato	17
3079	Jatobá do Piauí	17
3080	Jerumenha	17
3081	João Costa	17
3082	Joaquim Pires	17
3083	Joca Marques	17
3084	José de Freitas	17
3085	Juazeiro do Piauí	17
3086	Júlio Borges	17
3087	Jurema	17
3088	Lagoa Alegre	17
3089	Lagoa de São Francisco	17
3090	Lagoa do Barro do Piauí	17
3091	Lagoa do Piauí	17
3092	Lagoa do Sítio	17
3093	Lagoinha do Piauí	17
3094	Landri Sales	17
3095	Luís Correia	17
3096	Luzilândia	17
3097	Madeiro	17
3098	Manoel Emídio	17
3099	Marcolândia	17
3100	Marcos Parente	17
3101	Massapê do Piauí	17
3102	Matias Olímpio	17
3103	Miguel Alves	17
3104	Miguel Leão	17
3105	Milton Brandão	17
3106	Monsenhor Gil	17
3107	Monsenhor Hipólito	17
3108	Monte Alegre do Piauí	17
3109	Morro Cabeça no Tempo	17
3110	Morro do Chapéu do Piauí	17
3111	Murici dos Portelas	17
3112	Nazaré do Piauí	17
3113	Nossa Senhora de Nazaré	17
3114	Nossa Senhora dos Remédios	17
3115	Nova Santa Rita	17
3116	Novo Oriente do Piauí	17
3117	Novo Santo Antônio	17
3118	Oeiras	17
3119	Olho d'Água do Piauí	17
3120	Padre Marcos	17
3121	Paes Landim	17
3122	Pajeú do Piauí	17
3123	Palmeira do Piauí	17
3124	Palmeirais	17
3125	Paquetá	17
3126	Parnaguá	17
3127	Parnaíba	17
3128	Passagem Franca do Piauí	17
3129	Patos do Piauí	17
3130	Pau d'Arco do Piauí	17
3131	Paulistana	17
3132	Pavussu	17
3133	Pedro II	17
3134	Pedro Laurentino	17
3135	Picos	17
3136	Pimenteiras	17
3137	Pio IX	17
3138	Piracuruca	17
3139	Piripiri	17
3140	Porto	17
3141	Porto Alegre do Piauí	17
3142	Prata do Piauí	17
3143	Queimada Nova	17
3144	Redenção do Gurguéia	17
3145	Regeneração	17
3146	Riacho Frio	17
3147	Ribeira do Piauí	17
3148	Ribeiro Gonçalves	17
3149	Rio Grande do Piauí	17
3150	Santa Cruz do Piauí	17
3151	Santa Cruz dos Milagres	17
3152	Santa Filomena	17
3153	Santa Luz	17
3154	Santa Rosa do Piauí	17
3155	Santana do Piauí	17
3156	Santo Antônio de Lisboa	17
3157	Santo Antônio dos Milagres	17
3158	Santo Inácio do Piauí	17
3159	São Braz do Piauí	17
3160	São Félix do Piauí	17
3161	São Francisco de Assis do Piauí	17
3162	São Francisco do Piauí	17
3163	São Gonçalo do Gurguéia	17
3164	São Gonçalo do Piauí	17
3165	São João da Canabrava	17
3166	São João da Fronteira	17
3167	São João da Serra	17
3168	São João da Varjota	17
3169	São João do Arraial	17
3170	São João do Piauí	17
3171	São José do Divino	17
3172	São José do Peixe	17
3173	São José do Piauí	17
3174	São Julião	17
3175	São Lourenço do Piauí	17
3176	São Luis do Piauí	17
3177	São Miguel da Baixa Grande	17
3178	São Miguel do Fidalgo	17
3179	São Miguel do Tapuio	17
3180	São Pedro do Piauí	17
3181	São Raimundo Nonato	17
3182	Sebastião Barros	17
3183	Sebastião Leal	17
3184	Sigefredo Pacheco	17
3185	Simões	17
3186	Simplício Mendes	17
3187	Socorro do Piauí	17
3188	Sussuapara	17
3189	Tamboril do Piauí	17
3190	Tanque do Piauí	17
3191	Teresina	17
3192	União	17
3193	Uruçuí	17
3194	Valença do Piauí	17
3195	Várzea Branca	17
3196	Várzea Grande	17
3197	Vera Mendes	17
3198	Vila Nova do Piauí	17
3199	Wall Ferraz	17
3200	Abatiá	18
3201	Adrianópolis	18
3202	Agudos do Sul	18
3203	Almirante Tamandaré	18
3204	Altamira do Paraná	18
3205	Alto Paraná	18
3206	Alto Piquiri	18
3207	Altônia	18
3208	Alvorada do Sul	18
3209	Amaporã	18
3210	Ampére	18
3211	Anahy	18
3212	Andirá	18
3213	Ângulo	18
3214	Antonina	18
3215	Antônio Olinto	18
3216	Apucarana	18
3217	Arapongas	18
3218	Arapoti	18
3219	Arapuã	18
3220	Araruna	18
3221	Araucária	18
3222	Ariranha do Ivaí	18
3223	Assaí	18
3224	Assis Chateaubriand	18
3225	Astorga	18
3226	Atalaia	18
3227	Balsa Nova	18
3228	Bandeirantes	18
3229	Barbosa Ferraz	18
3230	Barra do Jacaré	18
3231	Barracão	18
3232	Bela Vista da Caroba	18
3233	Bela Vista do Paraíso	18
3234	Bituruna	18
3235	Boa Esperança	18
3236	Boa Esperança do Iguaçu	18
3237	Boa Ventura de São Roque	18
3238	Boa Vista da Aparecida	18
3239	Bocaiúva do Sul	18
3240	Bom Jesus do Sul	18
3241	Bom Sucesso	18
3242	Bom Sucesso do Sul	18
3243	Borrazópolis	18
3244	Braganey	18
3245	Brasilândia do Sul	18
3246	Cafeara	18
3247	Cafelândia	18
3248	Cafezal do Sul	18
3249	Califórnia	18
3250	Cambará	18
3251	Cambé	18
3252	Cambira	18
3253	Campina da Lagoa	18
3254	Campina do Simão	18
3255	Campina Grande do Sul	18
3256	Campo Bonito	18
3257	Campo do Tenente	18
3258	Campo Largo	18
3259	Campo Magro	18
3260	Campo Mourão	18
3261	Cândido de Abreu	18
3262	Candói	18
3263	Cantagalo	18
3264	Capanema	18
3265	Capitão Leônidas Marques	18
3266	Carambeí	18
3267	Carlópolis	18
3268	Cascavel	18
3269	Castro	18
3270	Catanduvas	18
3271	Centenário do Sul	18
3272	Cerro Azul	18
3273	Céu Azul	18
3274	Chopinzinho	18
3275	Cianorte	18
3276	Cidade Gaúcha	18
3277	Clevelândia	18
3278	Colombo	18
3279	Colorado	18
3280	Congonhinhas	18
3281	Conselheiro Mairinck	18
3282	Contenda	18
3283	Corbélia	18
3284	Cornélio Procópio	18
3285	Coronel Domingos Soares	18
3286	Coronel Vivida	18
3287	Corumbataí do Sul	18
3288	Cruz Machado	18
3289	Cruzeiro do Iguaçu	18
3290	Cruzeiro do Oeste	18
3291	Cruzeiro do Sul	18
3292	Cruzmaltina	18
3293	Curitiba	18
3294	Curiúva	18
3295	Diamante d'Oeste	18
3296	Diamante do Norte	18
3297	Diamante do Sul	18
3298	Dois Vizinhos	18
3299	Douradina	18
3300	Doutor Camargo	18
3301	Doutor Ulysses	18
3302	Enéas Marques	18
3303	Engenheiro Beltrão	18
3304	Entre Rios do Oeste	18
3305	Esperança Nova	18
3306	Espigão Alto do Iguaçu	18
3307	Farol	18
3308	Faxinal	18
3309	Fazenda Rio Grande	18
3310	Fênix	18
3311	Fernandes Pinheiro	18
3312	Figueira	18
3313	Flor da Serra do Sul	18
3314	Floraí	18
3315	Floresta	18
3316	Florestópolis	18
3317	Flórida	18
3318	Formosa do Oeste	18
3319	Foz do Iguaçu	18
3320	Foz do Jordão	18
3321	Francisco Alves	18
3322	Francisco Beltrão	18
3323	General Carneiro	18
3324	Godoy Moreira	18
3325	Goioerê	18
3326	Goioxim	18
3327	Grandes Rios	18
3328	Guaíra	18
3329	Guairaçá	18
3330	Guamiranga	18
3331	Guapirama	18
3332	Guaporema	18
3333	Guaraci	18
3334	Guaraniaçu	18
3335	Guarapuava	18
3336	Guaraqueçaba	18
3337	Guaratuba	18
3338	Honório Serpa	18
3339	Ibaiti	18
3340	Ibema	18
3341	Ibiporã	18
3342	Icaraíma	18
3343	Iguaraçu	18
3344	Iguatu	18
3345	Imbaú	18
3346	Imbituva	18
3347	Inácio Martins	18
3348	Inajá	18
3349	Indianópolis	18
3350	Ipiranga	18
3351	Iporã	18
3352	Iracema do Oeste	18
3353	Irati	18
3354	Iretama	18
3355	Itaguajé	18
3356	Itaipulândia	18
3357	Itambaracá	18
3358	Itambé	18
3359	Itapejara d'Oeste	18
3360	Itaperuçu	18
3361	Itaúna do Sul	18
3362	Ivaí	18
3363	Ivaiporã	18
3364	Ivaté	18
3365	Ivatuba	18
3366	Jaboti	18
3367	Jacarezinho	18
3368	Jaguapitã	18
3369	Jaguariaíva	18
3370	Jandaia do Sul	18
3371	Janiópolis	18
3372	Japira	18
3373	Japurá	18
3374	Jardim Alegre	18
3375	Jardim Olinda	18
3376	Jataizinho	18
3377	Jesuítas	18
3378	Joaquim Távora	18
3379	Jundiaí do Sul	18
3380	Juranda	18
3381	Jussara	18
3382	Kaloré	18
3383	Lapa	18
3384	Laranjal	18
3385	Laranjeiras do Sul	18
3386	Leópolis	18
3387	Lidianópolis	18
3388	Lindoeste	18
3389	Loanda	18
3390	Lobato	18
3391	Londrina	18
3392	Luiziana	18
3393	Lunardelli	18
3394	Lupionópolis	18
3395	Mallet	18
3396	Mamborê	18
3397	Mandaguaçu	18
3398	Mandaguari	18
3399	Mandirituba	18
3400	Manfrinópolis	18
3401	Mangueirinha	18
3402	Manoel Ribas	18
3403	Marechal Cândido Rondon	18
3404	Maria Helena	18
3405	Marialva	18
3406	Marilândia do Sul	18
3407	Marilena	18
3408	Mariluz	18
3409	Maringá	18
3410	Mariópolis	18
3411	Maripá	18
3412	Marmeleiro	18
3413	Marquinho	18
3414	Marumbi	18
3415	Matelândia	18
3416	Matinhos	18
3417	Mato Rico	18
3418	Mauá da Serra	18
3419	Medianeira	18
3420	Mercedes	18
3421	Mirador	18
3422	Miraselva	18
3423	Missal	18
3424	Moreira Sales	18
3425	Morretes	18
3426	Munhoz de Melo	18
3427	Nossa Senhora das Graças	18
3428	Nova Aliança do Ivaí	18
3429	Nova América da Colina	18
3430	Nova Aurora	18
3431	Nova Cantu	18
3432	Nova Esperança	18
3433	Nova Esperança do Sudoeste	18
3434	Nova Fátima	18
3435	Nova Laranjeiras	18
3436	Nova Londrina	18
3437	Nova Olímpia	18
3438	Nova Prata do Iguaçu	18
3439	Nova Santa Bárbara	18
3440	Nova Santa Rosa	18
3441	Nova Tebas	18
3442	Novo Itacolomi	18
3443	Ortigueira	18
3444	Ourizona	18
3445	Ouro Verde do Oeste	18
3446	Paiçandu	18
3447	Palmas	18
3448	Palmeira	18
3449	Palmital	18
3450	Palotina	18
3451	Paraíso do Norte	18
3452	Paranacity	18
3453	Paranaguá	18
3454	Paranapoema	18
3455	Paranavaí	18
3456	Pato Bragado	18
3457	Pato Branco	18
3458	Paula Freitas	18
3459	Paulo Frontin	18
3460	Peabiru	18
3461	Perobal	18
3462	Pérola	18
3463	Pérola d'Oeste	18
3464	Piên	18
3465	Pinhais	18
3466	Pinhal de São Bento	18
3467	Pinhalão	18
3468	Pinhão	18
3469	Piraí do Sul	18
3470	Piraquara	18
3471	Pitanga	18
3472	Pitangueiras	18
3473	Planaltina do Paraná	18
3474	Planalto	18
3475	Ponta Grossa	18
3476	Pontal do Paraná	18
3477	Porecatu	18
3478	Porto Amazonas	18
3479	Porto Barreiro	18
3480	Porto Rico	18
3481	Porto Vitória	18
3482	Prado Ferreira	18
3483	Pranchita	18
3484	Presidente Castelo Branco	18
3485	Primeiro de Maio	18
3486	Prudentópolis	18
3487	Quarto Centenário	18
3488	Quatiguá	18
3489	Quatro Barras	18
3490	Quatro Pontes	18
3491	Quedas do Iguaçu	18
3492	Querência do Norte	18
3493	Quinta do Sol	18
3494	Quitandinha	18
3495	Ramilândia	18
3496	Rancho Alegre	18
3497	Rancho Alegre d'Oeste	18
3498	Realeza	18
3499	Rebouças	18
3500	Renascença	18
3501	Reserva	18
3502	Reserva do Iguaçu	18
3503	Ribeirão Claro	18
3504	Ribeirão do Pinhal	18
3505	Rio Azul	18
3506	Rio Bom	18
3507	Rio Bonito do Iguaçu	18
3508	Rio Branco do Ivaí	18
3509	Rio Branco do Sul	18
3510	Rio Negro	18
3511	Rolândia	18
3512	Roncador	18
3513	Rondon	18
3514	Rosário do Ivaí	18
3515	Sabáudia	18
3516	Salgado Filho	18
3517	Salto do Itararé	18
3518	Salto do Lontra	18
3519	Santa Amélia	18
3520	Santa Cecília do Pavão	18
3521	Santa Cruz Monte Castelo	18
3522	Santa Fé	18
3523	Santa Helena	18
3524	Santa Inês	18
3525	Santa Isabel do Ivaí	18
3526	Santa Izabel do Oeste	18
3527	Santa Lúcia	18
3528	Santa Maria do Oeste	18
3529	Santa Mariana	18
3530	Santa Mônica	18
3531	Santa Tereza do Oeste	18
3532	Santa Terezinha de Itaipu	18
3533	Santana do Itararé	18
3534	Santo Antônio da Platina	18
3535	Santo Antônio do Caiuá	18
3536	Santo Antônio do Paraíso	18
3537	Santo Antônio do Sudoeste	18
3538	Santo Inácio	18
3539	São Carlos do Ivaí	18
3540	São Jerônimo da Serra	18
3541	São João	18
3542	São João do Caiuá	18
3543	São João do Ivaí	18
3544	São João do Triunfo	18
3545	São Jorge d'Oeste	18
3546	São Jorge do Ivaí	18
3547	São Jorge do Patrocínio	18
3548	São José da Boa Vista	18
3549	São José das Palmeiras	18
3550	São José dos Pinhais	18
3551	São Manoel do Paraná	18
3552	São Mateus do Sul	18
3553	São Miguel do Iguaçu	18
3554	São Pedro do Iguaçu	18
3555	São Pedro do Ivaí	18
3556	São Pedro do Paraná	18
3557	São Sebastião da Amoreira	18
3558	São Tomé	18
3559	Sapopema	18
3560	Sarandi	18
3561	Saudade do Iguaçu	18
3562	Sengés	18
3563	Serranópolis do Iguaçu	18
3564	Sertaneja	18
3565	Sertanópolis	18
3566	Siqueira Campos	18
3567	Sulina	18
3568	Tamarana	18
3569	Tamboara	18
3570	Tapejara	18
3571	Tapira	18
3572	Teixeira Soares	18
3573	Telêmaco Borba	18
3574	Terra Boa	18
3575	Terra Rica	18
3576	Terra Roxa	18
3577	Tibagi	18
3578	Tijucas do Sul	18
3579	Toledo	18
3580	Tomazina	18
3581	Três Barras do Paraná	18
3582	Tunas do Paraná	18
3583	Tuneiras do Oeste	18
3584	Tupãssi	18
3585	Turvo	18
3586	Ubiratã	18
3587	Umuarama	18
3588	União da Vitória	18
3589	Uniflor	18
3590	Uraí	18
3591	Ventania	18
3592	Vera Cruz do Oeste	18
3593	Verê	18
3594	Vila Alta	18
3595	Virmond	18
3596	Vitorino	18
3597	Wenceslau Braz	18
3598	Xambrê	18
3599	Angra dos Reis	19
3600	Aperibé	19
3601	Araruama	19
3602	Areal	19
3603	Armação de Búzios	19
3604	Arraial do Cabo	19
3605	Barra do Piraí	19
3606	Barra Mansa	19
3607	Belford Roxo	19
3608	Bom Jardim	19
3609	Bom Jesus do Itabapoana	19
3610	Cabo Frio	19
3611	Cachoeiras de Macacu	19
3612	Cambuci	19
3613	Campos dos Goytacazes	19
3614	Cantagalo	19
3615	Carapebus	19
3616	Cardoso Moreira	19
3617	Carmo	19
3618	Casimiro de Abreu	19
3619	Comendador Levy Gasparian	19
3620	Conceição de Macabu	19
3621	Cordeiro	19
3622	Duas Barras	19
3623	Duque de Caxias	19
3624	Engenheiro Paulo de Frontin	19
3625	Guapimirim	19
3626	Iguaba Grande	19
3627	Itaboraí	19
3628	Itaguaí	19
3629	Italva	19
3630	Itaocara	19
3631	Itaperuna	19
3632	Itatiaia	19
3633	Japeri	19
3634	Laje do Muriaé	19
3635	Macaé	19
3636	Macuco	19
3637	Magé	19
3638	Mangaratiba	19
3639	Maricá	19
3640	Mendes	19
3641	Mesquita	19
3642	Miguel Pereira	19
3643	Miracema	19
3644	Natividade	19
3645	Nilópolis	19
3646	Niterói	19
3647	Nova Friburgo	19
3648	Nova Iguaçu	19
3649	Paracambi	19
3650	Paraíba do Sul	19
3651	Parati	19
3652	Paty do Alferes	19
3653	Petrópolis	19
3654	Pinheiral	19
3655	Piraí	19
3656	Porciúncula	19
3657	Porto Real	19
3658	Quatis	19
3659	Queimados	19
3660	Quissamã	19
3661	Resende	19
3662	Rio Bonito	19
3663	Rio Claro	19
3664	Rio das Flores	19
3665	Rio das Ostras	19
3666	Rio de Janeiro	19
3667	Santa Maria Madalena	19
3668	Santo Antônio de Pádua	19
3669	São Fidélis	19
3670	São Francisco de Itabapoana	19
3671	São Gonçalo	19
3672	São João da Barra	19
3673	São João de Meriti	19
3674	São José de Ubá	19
3675	São José do Vale do Rio Preto	19
3676	São Pedro da Aldeia	19
3677	São Sebastião do Alto	19
3678	Sapucaia	19
3679	Saquarema	19
3680	Seropédica	19
3681	Silva Jardim	19
3682	Sumidouro	19
3683	Tanguá	19
3684	Teresópolis	19
3685	Trajano de Morais	19
3686	Três Rios	19
3687	Valença	19
3688	Varre-Sai	19
3689	Vassouras	19
3690	Volta Redonda	19
3691	Acari	20
3692	Açu	20
3693	Afonso Bezerra	20
3694	Água Nova	20
3695	Alexandria	20
3696	Almino Afonso	20
3697	Alto do Rodrigues	20
3698	Angicos	20
3699	Antônio Martins	20
3700	Apodi	20
3701	Areia Branca	20
3702	Arês	20
3703	Augusto Severo	20
3704	Baía Formosa	20
3705	Baraúna	20
3706	Barcelona	20
3707	Bento Fernandes	20
3708	Bodó	20
3709	Bom Jesus	20
3710	Brejinho	20
3711	Caiçara do Norte	20
3712	Caiçara do Rio do Vento	20
3713	Caicó	20
3714	Campo Redondo	20
3715	Canguaretama	20
3716	Caraúbas	20
3717	Carnaúba dos Dantas	20
3718	Carnaubais	20
3719	Ceará-Mirim	20
3720	Cerro Corá	20
3721	Coronel Ezequiel	20
3722	Coronel João Pessoa	20
3723	Cruzeta	20
3724	Currais Novos	20
3725	Doutor Severiano	20
3726	Encanto	20
3727	Equador	20
3728	Espírito Santo	20
3729	Extremoz	20
3730	Felipe Guerra	20
3731	Fernando Pedroza	20
3732	Florânia	20
3733	Francisco Dantas	20
3734	Frutuoso Gomes	20
3735	Galinhos	20
3736	Goianinha	20
3737	Governador Dix-Sept Rosado	20
3738	Grossos	20
3739	Guamaré	20
3740	Ielmo Marinho	20
3741	Ipanguaçu	20
3742	Ipueira	20
3743	Itajá	20
3744	Itaú	20
3745	Jaçanã	20
3746	Jandaíra	20
3747	Janduís	20
3748	Januário Cicco	20
3749	Japi	20
3750	Jardim de Angicos	20
3751	Jardim de Piranhas	20
3752	Jardim do Seridó	20
3753	João Câmara	20
3754	João Dias	20
3755	José da Penha	20
3756	Jucurutu	20
3757	Jundiá	20
3758	Lagoa d'Anta	20
3759	Lagoa de Pedras	20
3760	Lagoa de Velhos	20
3761	Lagoa Nova	20
3762	Lagoa Salgada	20
3763	Lajes	20
3764	Lajes Pintadas	20
3765	Lucrécia	20
3766	Luís Gomes	20
3767	Macaíba	20
3768	Macau	20
3769	Major Sales	20
3770	Marcelino Vieira	20
3771	Martins	20
3772	Maxaranguape	20
3773	Messias Targino	20
3774	Montanhas	20
3775	Monte Alegre	20
3776	Monte das Gameleiras	20
3777	Mossoró	20
3778	Natal	20
3779	Nísia Floresta	20
3780	Nova Cruz	20
3781	Olho-d'Água do Borges	20
3782	Ouro Branco	20
3783	Paraná	20
3784	Paraú	20
3785	Parazinho	20
3786	Parelhas	20
3787	Parnamirim	20
3788	Passa e Fica	20
3789	Passagem	20
3790	Patu	20
3791	Pau dos Ferros	20
3792	Pedra Grande	20
3793	Pedra Preta	20
3794	Pedro Avelino	20
3795	Pedro Velho	20
3796	Pendências	20
3797	Pilões	20
3798	Poço Branco	20
3799	Portalegre	20
3800	Porto do Mangue	20
3801	Presidente Juscelino	20
3802	Pureza	20
3803	Rafael Fernandes	20
3804	Rafael Godeiro	20
3805	Riacho da Cruz	20
3806	Riacho de Santana	20
3807	Riachuelo	20
3808	Rio do Fogo	20
3809	Rodolfo Fernandes	20
3810	Ruy Barbosa	20
3811	Santa Cruz	20
3812	Santa Maria	20
3813	Santana do Matos	20
3814	Santana do Seridó	20
3815	Santo Antônio	20
3816	São Bento do Norte	20
3817	São Bento do Trairí	20
3818	São Fernando	20
3819	São Francisco do Oeste	20
3820	São Gonçalo do Amarante	20
3821	São João do Sabugi	20
3822	São José de Mipibu	20
3823	São José do Campestre	20
3824	São José do Seridó	20
3825	São Miguel	20
3826	São Miguel de Touros	20
3827	São Paulo do Potengi	20
3828	São Pedro	20
3829	São Rafael	20
3830	São Tomé	20
3831	São Vicente	20
3832	Senador Elói de Souza	20
3833	Senador Georgino Avelino	20
3834	Serra de São Bento	20
3835	Serra do Mel	20
3836	Serra Negra do Norte	20
3837	Serrinha	20
3838	Serrinha dos Pintos	20
3839	Severiano Melo	20
3840	Sítio Novo	20
3841	Taboleiro Grande	20
3842	Taipu	20
3843	Tangará	20
3844	Tenente Ananias	20
3845	Tenente Laurentino Cruz	20
3846	Tibau	20
3847	Tibau do Sul	20
3848	Timbaúba dos Batistas	20
3849	Touros	20
3850	Triunfo Potiguar	20
3851	Umarizal	20
3852	Upanema	20
3853	Várzea	20
3854	Venha-Ver	20
3855	Vera Cruz	20
3856	Viçosa	20
3857	Vila Flor	20
3858	Alta Floresta d'Oeste	21
3859	Alto Alegre do Parecis	21
3860	Alto Paraíso	21
3861	Alvorada d'Oeste	21
3862	Ariquemes	21
3863	Buritis	21
3864	Cabixi	21
3865	Cacaulândia	21
3866	Cacoal	21
3867	Campo Novo de Rondônia	21
3868	Candeias do Jamari	21
3869	Castanheiras	21
3870	Cerejeiras	21
3871	Chupinguaia	21
3872	Colorado do Oeste	21
3873	Corumbiara	21
3874	Costa Marques	21
3875	Cujubim	21
3876	Espigão d'Oeste	21
3877	Governador Jorge Teixeira	21
3878	Guajará-Mirim	21
3879	Itapuã do Oeste	21
3880	Jaru	21
3881	Ji-Paraná	21
3882	Machadinho d'Oeste	21
3883	Ministro Andreazza	21
3884	Mirante da Serra	21
3885	Monte Negro	21
3886	Nova Brasilândia d'Oeste	21
3887	Nova Mamoré	21
3888	Nova União	21
3889	Novo Horizonte do Oeste	21
3890	Ouro Preto do Oeste	21
3891	Parecis	21
3892	Pimenta Bueno	21
3893	Pimenteiras do Oeste	21
3894	Porto Velho	21
3895	Presidente Médici	21
3896	Primavera de Rondônia	21
3897	Rio Crespo	21
3898	Rolim de Moura	21
3899	Santa Luzia d'Oeste	21
3900	São Felipe d'Oeste	21
3901	São Francisco do Guaporé	21
3902	São Miguel do Guaporé	21
3903	Seringueiras	21
3904	Teixeirópolis	21
3905	Theobroma	21
3906	Urupá	21
3907	Vale do Anari	21
3908	Vale do Paraíso	21
3909	Vilhena	21
3910	Alto Alegre	22
3911	Amajari	22
3912	Boa Vista	22
3913	Bonfim	22
3914	Cantá	22
3915	Caracaraí	22
3916	Caroebe	22
3917	Iracema	22
3918	Mucajaí	22
3919	Normandia	22
3920	Pacaraima	22
3921	Rorainópolis	22
3922	São João da Baliza	22
3923	São Luiz	22
3924	Uiramutã	22
3925	Aceguá	23
3926	Água Santa	23
3927	Agudo	23
3928	Ajuricaba	23
3929	Alecrim	23
3930	Alegrete	23
3931	Alegria	23
3932	Almirante Tamandaré do Sul	23
3933	Alpestre	23
3934	Alto Alegre	23
3935	Alto Feliz	23
3936	Alvorada	23
3937	Amaral Ferrador	23
3938	Ametista do Sul	23
3939	André da Rocha	23
3940	Anta Gorda	23
3941	Antônio Prado	23
3942	Arambaré	23
3943	Araricá	23
3944	Aratiba	23
3945	Arroio do Meio	23
3946	Arroio do Padre	23
3947	Arroio do Sal	23
3948	Arroio do Tigre	23
3949	Arroio dos Ratos	23
3950	Arroio Grande	23
3951	Arvorezinha	23
3952	Augusto Pestana	23
3953	Áurea	23
3954	Bagé	23
3955	Balneário Pinhal	23
3956	Barão	23
3957	Barão de Cotegipe	23
3958	Barão do Triunfo	23
3959	Barra do Guarita	23
3960	Barra do Quaraí	23
3961	Barra do Ribeiro	23
3962	Barra do Rio Azul	23
3963	Barra Funda	23
3964	Barracão	23
3965	Barros Cassal	23
3966	Benjamin Constan do Sul	23
3967	Bento Gonçalves	23
3968	Boa Vista das Missões	23
3969	Boa Vista do Buricá	23
3970	Boa Vista do Cadeado	23
3971	Boa Vista do Incra	23
3972	Boa Vista do Sul	23
3973	Bom Jesus	23
3974	Bom Princípio	23
3975	Bom Progresso	23
3976	Bom Retiro do Sul	23
3977	Boqueirão do Leão	23
3978	Bossoroca	23
3979	Bozano	23
3980	Braga	23
3981	Brochier	23
3982	Butiá	23
3983	Caçapava do Sul	23
3984	Cacequi	23
3985	Cachoeira do Sul	23
3986	Cachoeirinha	23
3987	Cacique Doble	23
3988	Caibaté	23
3989	Caiçara	23
3990	Camaquã	23
3991	Camargo	23
3992	Cambará do Sul	23
3993	Campestre da Serra	23
3994	Campina das Missões	23
3995	Campinas do Sul	23
3996	Campo Bom	23
3997	Campo Novo	23
3998	Campos Borges	23
3999	Candelária	23
4000	Cândido Godói	23
4001	Candiota	23
4002	Canela	23
4003	Canguçu	23
4004	Canoas	23
4005	Canudos do Vale	23
4006	Capão Bonito do Sul	23
4007	Capão da Canoa	23
4008	Capão do Cipó	23
4009	Capão do Leão	23
4010	Capela de Santana	23
4011	Capitão	23
4012	Capivari do Sul	23
4013	Caraá	23
4014	Carazinho	23
4015	Carlos Barbosa	23
4016	Carlos Gomes	23
4017	Casca	23
4018	Caseiros	23
4019	Catuípe	23
4020	Caxias do Sul	23
4021	Centenário	23
4022	Cerrito	23
4023	Cerro Branco	23
4024	Cerro Grande	23
4025	Cerro Grande do Sul	23
4026	Cerro Largo	23
4027	Chapada	23
4028	Charqueadas	23
4029	Charrua	23
4030	Chiapeta	23
4031	Chuí	23
4032	Chuvisca	23
4033	Cidreira	23
4034	Ciríaco	23
4035	Colinas	23
4036	Colorado	23
4037	Condor	23
4038	Constantina	23
4039	Coqueiro Baixo	23
4040	Coqueiros do Sul	23
4041	Coronel Barros	23
4042	Coronel Bicaco	23
4043	Coronel Pilar	23
4044	Cotiporã	23
4045	Coxilha	23
4046	Crissiumal	23
4047	Cristal	23
4048	Cristal do Sul	23
4049	Cruz Alta	23
4050	Cruzaltense	23
4051	Cruzeiro do Sul	23
4052	David Canabarro	23
4053	Derrubadas	23
4054	Dezesseis de Novembro	23
4055	Dilermando de Aguiar	23
4056	Dois Irmãos	23
4057	Dois Irmãos das Missões	23
4058	Dois Lajeados	23
4059	Dom Feliciano	23
4060	Dom Pedrito	23
4061	Dom Pedro de Alcântara	23
4062	Dona Francisca	23
4063	Doutor Maurício Cardoso	23
4064	Doutor Ricardo	23
4065	Eldorado do Sul	23
4066	Encantado	23
4067	Encruzilhada do Sul	23
4068	Engenho Velho	23
4069	Entre Rios do Sul	23
4070	Entre-Ijuís	23
4071	Erebango	23
4072	Erechim	23
4073	Ernestina	23
4074	Erval Grande	23
4075	Erval Seco	23
4076	Esmeralda	23
4077	Esperança do Sul	23
4078	Espumoso	23
4079	Estação	23
4080	Estância Velha	23
4081	Esteio	23
4082	Estrela	23
4083	Estrela Velha	23
4084	Eugênio de Castro	23
4085	Fagundes Varela	23
4086	Farroupilha	23
4087	Faxinal do Soturno	23
4088	Faxinalzinho	23
4089	Fazenda Vilanova	23
4090	Feliz	23
4091	Flores da Cunha	23
4092	Floriano Peixoto	23
4093	Fontoura Xavier	23
4094	Formigueiro	23
4095	Forquetinha	23
4096	Fortaleza dos Valos	23
4097	Frederico Westphalen	23
4098	Garibaldi	23
4099	Garruchos	23
4100	Gaurama	23
4101	General Câmara	23
4102	Gentil	23
4103	Getúlio Vargas	23
4104	Giruá	23
4105	Glorinha	23
4106	Gramado	23
4107	Gramado dos Loureiros	23
4108	Gramado Xavier	23
4109	Gravataí	23
4110	Guabiju	23
4111	Guaíba	23
4112	Guaporé	23
4113	Guarani das Missões	23
4114	Harmonia	23
4115	Herval	23
4116	Herveiras	23
4117	Horizontina	23
4118	Hulha Negra	23
4119	Humaitá	23
4120	Ibarama	23
4121	Ibiaçá	23
4122	Ibiraiaras	23
4123	Ibirapuitã	23
4124	Ibirubá	23
4125	Igrejinha	23
4126	Ijuí	23
4127	Ilópolis	23
4128	Imbé	23
4129	Imigrante	23
4130	Independência	23
4131	Inhacorá	23
4132	Ipê	23
4133	Ipiranga do Sul	23
4134	Iraí	23
4135	Itaara	23
4136	Itacurubi	23
4137	Itapuca	23
4138	Itaqui	23
4139	Itati	23
4140	Itatiba do Sul	23
4141	Ivorá	23
4142	Ivoti	23
4143	Jaboticaba	23
4144	Jacuizinho	23
4145	Jacutinga	23
4146	Jaguarão	23
4147	Jaguari	23
4148	Jaquirana	23
4149	Jari	23
4150	Jóia	23
4151	Júlio de Castilhos	23
4152	Lagoa Bonita do Sul	23
4153	Lagoa dos Três Cantos	23
4154	Lagoa Vermelha	23
4155	Lagoão	23
4156	Lajeado	23
4157	Lajeado do Bugre	23
4158	Lavras do Sul	23
4159	Liberato Salzano	23
4160	Lindolfo Collor	23
4161	Linha Nova	23
4162	Maçambara	23
4163	Machadinho	23
4164	Mampituba	23
4165	Manoel Viana	23
4166	Maquiné	23
4167	Maratá	23
4168	Marau	23
4169	Marcelino Ramos	23
4170	Mariana Pimentel	23
4171	Mariano Moro	23
4172	Marques de Souza	23
4173	Mata	23
4174	Mato Castelhano	23
4175	Mato Leitão	23
4176	Mato Queimado	23
4177	Maximiliano de Almeida	23
4178	Minas do Leão	23
4179	Miraguaí	23
4180	Montauri	23
4181	Monte Alegre dos Campos	23
4182	Monte Belo do Sul	23
4183	Montenegro	23
4184	Mormaço	23
4185	Morrinhos do Sul	23
4186	Morro Redondo	23
4187	Morro Reuter	23
4188	Mostardas	23
4189	Muçum	23
4190	Muitos Capões	23
4191	Muliterno	23
4192	Não-Me-Toque	23
4193	Nicolau Vergueiro	23
4194	Nonoai	23
4195	Nova Alvorada	23
4196	Nova Araçá	23
4197	Nova Bassano	23
4198	Nova Boa Vista	23
4199	Nova Bréscia	23
4200	Nova Candelária	23
4201	Nova Esperança do Sul	23
4202	Nova Hartz	23
4203	Nova Pádua	23
4204	Nova Palma	23
4205	Nova Petrópolis	23
4206	Nova Prata	23
4207	Nova Ramada	23
4208	Nova Roma do Sul	23
4209	Nova Santa Rita	23
4210	Novo Barreiro	23
4211	Novo Cabrais	23
4212	Novo Hamburgo	23
4213	Novo Machado	23
4214	Novo Tiradentes	23
4215	Novo Xingu	23
4216	Osório	23
4217	Paim Filho	23
4218	Palmares do Sul	23
4219	Palmeira das Missões	23
4220	Palmitinho	23
4221	Panambi	23
4222	Pântano Grande	23
4223	Paraí	23
4224	Paraíso do Sul	23
4225	Pareci Novo	23
4226	Parobé	23
4227	Passa Sete	23
4228	Passo do Sobrado	23
4229	Passo Fundo	23
4230	Paulo Bento	23
4231	Paverama	23
4232	Pedras Altas	23
4233	Pedro Osório	23
4234	Pejuçara	23
4235	Pelotas	23
4236	Picada Café	23
4237	Pinhal	23
4238	Pinhal da Serra	23
4239	Pinhal Grande	23
4240	Pinheirinho do Vale	23
4241	Pinheiro Machado	23
4242	Pirapó	23
4243	Piratini	23
4244	Planalto	23
4245	Poço das Antas	23
4246	Pontão	23
4247	Ponte Preta	23
4248	Portão	23
4249	Porto Alegre	23
4250	Porto Lucena	23
4251	Porto Mauá	23
4252	Porto Vera Cruz	23
4253	Porto Xavier	23
4254	Pouso Novo	23
4255	Presidente Lucena	23
4256	Progresso	23
4257	Protásio Alves	23
4258	Putinga	23
4259	Quaraí	23
4260	Quatro Irmãos	23
4261	Quevedos	23
4262	Quinze de Novembro	23
4263	Redentora	23
4264	Relvado	23
4265	Restinga Seca	23
4266	Rio dos Índios	23
4267	Rio Grande	23
4268	Rio Pardo	23
4269	Riozinho	23
4270	Roca Sales	23
4271	Rodeio Bonito	23
4272	Rolador	23
4273	Rolante	23
4274	Ronda Alta	23
4275	Rondinha	23
4276	Roque Gonzales	23
4277	Rosário do Sul	23
4278	Sagrada Família	23
4279	Saldanha Marinho	23
4280	Salto do Jacuí	23
4281	Salvador das Missões	23
4282	Salvador do Sul	23
4283	Sananduva	23
4284	Santa Bárbara do Sul	23
4285	Santa Cecília do Sul	23
4286	Santa Clara do Sul	23
4287	Santa Cruz do Sul	23
4288	Santa Margarida do Sul	23
4289	Santa Maria	23
4290	Santa Maria do Herval	23
4291	Santa Rosa	23
4292	Santa Tereza	23
4293	Santa Vitória do Palmar	23
4294	Santana da Boa Vista	23
4295	Santana do Livramento	23
4296	Santiago	23
4297	Santo Ângelo	23
4298	Santo Antônio da Patrulha	23
4299	Santo Antônio das Missões	23
4300	Santo Antônio do Palma	23
4301	Santo Antônio do Planalto	23
4302	Santo Augusto	23
4303	Santo Cristo	23
4304	Santo Expedito do Sul	23
4305	São Borja	23
4306	São Domingos do Sul	23
4307	São Francisco de Assis	23
4308	São Francisco de Paula	23
4309	São Gabriel	23
4310	São Jerônimo	23
4311	São João da Urtiga	23
4312	São João do Polêsine	23
4313	São Jorge	23
4314	São José das Missões	23
4315	São José do Herval	23
4316	São José do Hortêncio	23
4317	São José do Inhacorá	23
4318	São José do Norte	23
4319	São José do Ouro	23
4320	São José do Sul	23
4321	São José dos Ausentes	23
4322	São Leopoldo	23
4323	São Lourenço do Sul	23
4324	São Luiz Gonzaga	23
4325	São Marcos	23
4326	São Martinho	23
4327	São Martinho da Serra	23
4328	São Miguel das Missões	23
4329	São Nicolau	23
4330	São Paulo das Missões	23
4331	São Pedro da Serra	23
4332	São Pedro das Missões	23
4333	São Pedro do Butiá	23
4334	São Pedro do Sul	23
4335	São Sebastião do Caí	23
4336	São Sepé	23
4337	São Valentim	23
4338	São Valentim do Sul	23
4339	São Valério do Sul	23
4340	São Vendelino	23
4341	São Vicente do Sul	23
4342	Sapiranga	23
4343	Sapucaia do Sul	23
4344	Sarandi	23
4345	Seberi	23
4346	Sede Nova	23
4347	Segredo	23
4348	Selbach	23
4349	Senador Salgado Filho	23
4350	Sentinela do Sul	23
4351	Serafina Corrêa	23
4352	Sério	23
4353	Sertão	23
4354	Sertão Santana	23
4355	Sete de Setembro	23
4356	Severiano de Almeida	23
4357	Silveira Martins	23
4358	Sinimbu	23
4359	Sobradinho	23
4360	Soledade	23
4361	Tabaí	23
4362	Tapejara	23
4363	Tapera	23
4364	Tapes	23
4365	Taquara	23
4366	Taquari	23
4367	Taquaruçu do Sul	23
4368	Tavares	23
4369	Tenente Portela	23
4370	Terra de Areia	23
4371	Teutônia	23
4372	Tio Hugo	23
4373	Tiradentes do Sul	23
4374	Toropi	23
4375	Torres	23
4376	Tramandaí	23
4377	Travesseiro	23
4378	Três Arroios	23
4379	Três Cachoeiras	23
4380	Três Coroas	23
4381	Três de Maio	23
4382	Três Forquilhas	23
4383	Três Palmeiras	23
4384	Três Passos	23
4385	Trindade do Sul	23
4386	Triunfo	23
4387	Tucunduva	23
4388	Tunas	23
4389	Tupanci do Sul	23
4390	Tupanciretã	23
4391	Tupandi	23
4392	Tuparendi	23
4393	Turuçu	23
4394	Ubiretama	23
4395	União da Serra	23
4396	Unistalda	23
4397	Uruguaiana	23
4398	Vacaria	23
4399	Vale do Sol	23
4400	Vale Real	23
4401	Vale Verde	23
4402	Vanini	23
4403	Venâncio Aires	23
4404	Vera Cruz	23
4405	Veranópolis	23
4406	Vespasiano Correa	23
4407	Viadutos	23
4408	Viamão	23
4409	Vicente Dutra	23
4410	Victor Graeff	23
4411	Vila Flores	23
4412	Vila Lângaro	23
4413	Vila Maria	23
4414	Vila Nova do Sul	23
4415	Vista Alegre	23
4416	Vista Alegre do Prata	23
4417	Vista Gaúcha	23
4418	Vitória das Missões	23
4419	Westfália	23
4420	Xangri-lá	23
4421	Abdon Batista	24
4422	Abelardo Luz	24
4423	Agrolândia	24
4424	Agronômica	24
4425	Água Doce	24
4426	Águas de Chapecó	24
4427	Águas Frias	24
4428	Águas Mornas	24
4429	Alfredo Wagner	24
4430	Alto Bela Vista	24
4431	Anchieta	24
4432	Angelina	24
4433	Anita Garibaldi	24
4434	Anitápolis	24
4435	Antônio Carlos	24
4436	Apiúna	24
4437	Arabutã	24
4438	Araquari	24
4439	Araranguá	24
4440	Armazém	24
4441	Arroio Trinta	24
4442	Arvoredo	24
4443	Ascurra	24
4444	Atalanta	24
4445	Aurora	24
4446	Balneário Arroio do Silva	24
4447	Balneário Barra do Sul	24
4448	Balneário Camboriú	24
4449	Balneário Gaivota	24
4450	Bandeirante	24
4451	Barra Bonita	24
4452	Barra Velha	24
4453	Bela Vista do Toldo	24
4454	Belmonte	24
4455	Benedito Novo	24
4456	Biguaçu	24
4457	Blumenau	24
4458	Bocaina do Sul	24
4459	Bom Jardim da Serra	24
4460	Bom Jesus	24
4461	Bom Jesus do Oeste	24
4462	Bom Retiro	24
4463	Bombinhas	24
4464	Botuverá	24
4465	Braço do Norte	24
4466	Braço do Trombudo	24
4467	Brunópolis	24
4468	Brusque	24
4469	Caçador	24
4470	Caibi	24
4471	Calmon	24
4472	Camboriú	24
4473	Campo Alegre	24
4474	Campo Belo do Sul	24
4475	Campo Erê	24
4476	Campos Novos	24
4477	Canelinha	24
4478	Canoinhas	24
4479	Capão Alto	24
4480	Capinzal	24
4481	Capivari de Baixo	24
4482	Catanduvas	24
4483	Caxambu do Sul	24
4484	Celso Ramos	24
4485	Cerro Negro	24
4486	Chapadão do Lageado	24
4487	Chapecó	24
4488	Cocal do Sul	24
4489	Concórdia	24
4490	Cordilheira Alta	24
4491	Coronel Freitas	24
4492	Coronel Martins	24
4493	Correia Pinto	24
4494	Corupá	24
4495	Criciúma	24
4496	Cunha Porã	24
4497	Cunhataí	24
4498	Curitibanos	24
4499	Descanso	24
4500	Dionísio Cerqueira	24
4501	Dona Emma	24
4502	Doutor Pedrinho	24
4503	Entre Rios	24
4504	Ermo	24
4505	Erval Velho	24
4506	Faxinal dos Guedes	24
4507	Flor do Sertão	24
4508	Florianópolis	24
4509	Formosa do Sul	24
4510	Forquilhinha	24
4511	Fraiburgo	24
4512	Frei Rogério	24
4513	Galvão	24
4514	Garopaba	24
4515	Garuva	24
4516	Gaspar	24
4517	Governador Celso Ramos	24
4518	Grão Pará	24
4519	Gravatal	24
4520	Guabiruba	24
4521	Guaraciaba	24
4522	Guaramirim	24
4523	Guarujá do Sul	24
4524	Guatambú	24
4525	Herval d'Oeste	24
4526	Ibiam	24
4527	Ibicaré	24
4528	Ibirama	24
4529	Içara	24
4530	Ilhota	24
4531	Imaruí	24
4532	Imbituba	24
4533	Imbuia	24
4534	Indaial	24
4535	Iomerê	24
4536	Ipira	24
4537	Iporã do Oeste	24
4538	Ipuaçu	24
4539	Ipumirim	24
4540	Iraceminha	24
4541	Irani	24
4542	Irati	24
4543	Irineópolis	24
4544	Itá	24
4545	Itaiópolis	24
4546	Itajaí	24
4547	Itapema	24
4548	Itapiranga	24
4549	Itapoá	24
4550	Ituporanga	24
4551	Jaborá	24
4552	Jacinto Machado	24
4553	Jaguaruna	24
4554	Jaraguá do Sul	24
4555	Jardinópolis	24
4556	Joaçaba	24
4557	Joinville	24
4558	José Boiteux	24
4559	Jupiá	24
4560	Lacerdópolis	24
4561	Lages	24
4562	Laguna	24
4563	Lajeado Grande	24
4564	Laurentino	24
4565	Lauro Muller	24
4566	Lebon Régis	24
4567	Leoberto Leal	24
4568	Lindóia do Sul	24
4569	Lontras	24
4570	Luiz Alves	24
4571	Luzerna	24
4572	Macieira	24
4573	Mafra	24
4574	Major Gercino	24
4575	Major Vieira	24
4576	Maracajá	24
4577	Maravilha	24
4578	Marema	24
4579	Massaranduba	24
4580	Matos Costa	24
4581	Meleiro	24
4582	Mirim Doce	24
4583	Modelo	24
4584	Mondaí	24
4585	Monte Carlo	24
4586	Monte Castelo	24
4587	Morro da Fumaça	24
4588	Morro Grande	24
4589	Navegantes	24
4590	Nova Erechim	24
4591	Nova Itaberaba	24
4592	Nova Trento	24
4593	Nova Veneza	24
4594	Novo Horizonte	24
4595	Orleans	24
4596	Otacílio Costa	24
4597	Ouro	24
4598	Ouro Verde	24
4599	Paial	24
4600	Painel	24
4601	Palhoça	24
4602	Palma Sola	24
4603	Palmeira	24
4604	Palmitos	24
4605	Papanduva	24
4606	Paraíso	24
4607	Passo de Torres	24
4608	Passos Maia	24
4609	Paulo Lopes	24
4610	Pedras Grandes	24
4611	Penha	24
4612	Peritiba	24
4613	Petrolândia	24
4614	Piçarras	24
4615	Pinhalzinho	24
4616	Pinheiro Preto	24
4617	Piratuba	24
4618	Planalto Alegre	24
4619	Pomerode	24
4620	Ponte Alta	24
4621	Ponte Alta do Norte	24
4622	Ponte Serrada	24
4623	Porto Belo	24
4624	Porto União	24
4625	Pouso Redondo	24
4626	Praia Grande	24
4627	Presidente Castelo Branco	24
4628	Presidente Getúlio	24
4629	Presidente Nereu	24
4630	Princesa	24
4631	Quilombo	24
4632	Rancho Queimado	24
4633	Rio das Antas	24
4634	Rio do Campo	24
4635	Rio do Oeste	24
4636	Rio do Sul	24
4637	Rio dos Cedros	24
4638	Rio Fortuna	24
4639	Rio Negrinho	24
4640	Rio Rufino	24
4641	Riqueza	24
4642	Rodeio	24
4643	Romelândia	24
4644	Salete	24
4645	Saltinho	24
4646	Salto Veloso	24
4647	Sangão	24
4648	Santa Cecília	24
4649	Santa Helena	24
4650	Santa Rosa de Lima	24
4651	Santa Rosa do Sul	24
4652	Santa Terezinha	24
4653	Santa Terezinha do Progresso	24
4654	Santiago do Sul	24
4655	Santo Amaro da Imperatriz	24
4656	São Bento do Sul	24
4657	São Bernardino	24
4658	São Bonifácio	24
4659	São Carlos	24
4660	São Cristovão do Sul	24
4661	São Domingos	24
4662	São Francisco do Sul	24
4663	São João Batista	24
4664	São João do Itaperiú	24
4665	São João do Oeste	24
4666	São João do Sul	24
4667	São Joaquim	24
4668	São José	24
4669	São José do Cedro	24
4670	São José do Cerrito	24
4671	São Lourenço do Oeste	24
4672	São Ludgero	24
4673	São Martinho	24
4674	São Miguel da Boa Vista	24
4675	São Miguel do Oeste	24
4676	São Pedro de Alcântara	24
4677	Saudades	24
4678	Schroeder	24
4679	Seara	24
4680	Serra Alta	24
4681	Siderópolis	24
4682	Sombrio	24
4683	Sul Brasil	24
4684	Taió	24
4685	Tangará	24
4686	Tigrinhos	24
4687	Tijucas	24
4688	Timbé do Sul	24
4689	Timbó	24
4690	Timbó Grande	24
4691	Três Barras	24
4692	Treviso	24
4693	Treze de Maio	24
4694	Treze Tílias	24
4695	Trombudo Central	24
4696	Tubarão	24
4697	Tunápolis	24
4698	Turvo	24
4699	União do Oeste	24
4700	Urubici	24
4701	Urupema	24
4702	Urussanga	24
4703	Vargeão	24
4704	Vargem	24
4705	Vargem Bonita	24
4706	Vidal Ramos	24
4707	Videira	24
4708	Vitor Meireles	24
4709	Witmarsum	24
4710	Xanxerê	24
4711	Xavantina	24
4712	Xaxim	24
4713	Zortéa	24
4714	Amparo de São Francisco	25
4715	Aquidabã	25
4716	Aracaju	25
4717	Arauá	25
4718	Areia Branca	25
4719	Barra dos Coqueiros	25
4720	Boquim	25
4721	Brejo Grande	25
4722	Campo do Brito	25
4723	Canhoba	25
4724	Canindé de São Francisco	25
4725	Capela	25
4726	Carira	25
4727	Carmópolis	25
4728	Cedro de São João	25
4729	Cristinápolis	25
4730	Cumbe	25
4731	Divina Pastora	25
4732	Estância	25
4733	Feira Nova	25
4734	Frei Paulo	25
4735	Gararu	25
4736	General Maynard	25
4737	Gracho Cardoso	25
4738	Ilha das Flores	25
4739	Indiaroba	25
4740	Itabaiana	25
4741	Itabaianinha	25
4742	Itabi	25
4743	Itaporanga d'Ajuda	25
4744	Japaratuba	25
4745	Japoatã	25
4746	Lagarto	25
4747	Laranjeiras	25
4748	Macambira	25
4749	Malhada dos Bois	25
4750	Malhador	25
4751	Maruim	25
4752	Moita Bonita	25
4753	Monte Alegre de Sergipe	25
4754	Muribeca	25
4755	Neópolis	25
4756	Nossa Senhora Aparecida	25
4757	Nossa Senhora da Glória	25
4758	Nossa Senhora das Dores	25
4759	Nossa Senhora de Lourdes	25
4760	Nossa Senhora do Socorro	25
4761	Pacatuba	25
4762	Pedra Mole	25
4763	Pedrinhas	25
4764	Pinhão	25
4765	Pirambu	25
4766	Poço Redondo	25
4767	Poço Verde	25
4768	Porto da Folha	25
4769	Propriá	25
4770	Riachão do Dantas	25
4771	Riachuelo	25
4772	Ribeirópolis	25
4773	Rosário do Catete	25
4774	Salgado	25
4775	Santa Luzia do Itanhy	25
4776	Santa Rosa de Lima	25
4777	Santana do São Francisco	25
4778	Santo Amaro das Brotas	25
4779	São Cristóvão	25
4780	São Domingos	25
4781	São Francisco	25
4782	São Miguel do Aleixo	25
4783	Simão Dias	25
4784	Siriri	25
4785	Telha	25
4786	Tobias Barreto	25
4787	Tomar do Geru	25
4788	Umbaúba	25
4789	Adamantina	26
4790	Adolfo	26
4791	Aguaí	26
4792	Águas da Prata	26
4793	Águas de Lindóia	26
4794	Águas de Santa Bárbara	26
4795	Águas de São Pedro	26
4796	Agudos	26
4797	Alambari	26
4798	Alfredo Marcondes	26
4799	Altair	26
4800	Altinópolis	26
4801	Alto Alegre	26
4802	Alumínio	26
4803	Álvares Florence	26
4804	Álvares Machado	26
4805	Álvaro de Carvalho	26
4806	Alvinlândia	26
4807	Americana	26
4808	Américo Brasiliense	26
4809	Américo de Campos	26
4810	Amparo	26
4811	Analândia	26
4812	Andradina	26
4813	Angatuba	26
4814	Anhembi	26
4815	Anhumas	26
4816	Aparecida	26
4817	Aparecida d'Oeste	26
4818	Apiaí	26
4819	Araçariguama	26
4820	Araçatuba	26
4821	Araçoiaba da Serra	26
4822	Aramina	26
4823	Arandu	26
4824	Arapeí	26
4825	Araraquara	26
4826	Araras	26
4827	Arco-Íris	26
4828	Arealva	26
4829	Areias	26
4830	Areiópolis	26
4831	Ariranha	26
4832	Artur Nogueira	26
4833	Arujá	26
4834	Aspásia	26
4835	Assis	26
4836	Atibaia	26
4837	Auriflama	26
4838	Avaí	26
4839	Avanhandava	26
4840	Avaré	26
4841	Bady Bassitt	26
4842	Balbinos	26
4843	Bálsamo	26
4844	Bananal	26
4845	Barão de Antonina	26
4846	Barbosa	26
4847	Bariri	26
4848	Barra Bonita	26
4849	Barra do Chapéu	26
4850	Barra do Turvo	26
4851	Barretos	26
4852	Barrinha	26
4853	Barueri	26
4854	Bastos	26
4855	Batatais	26
4856	Bauru	26
4857	Bebedouro	26
4858	Bento de Abreu	26
4859	Bernardino de Campos	26
4860	Bertioga	26
4861	Bilac	26
4862	Birigui	26
4863	Biritiba-Mirim	26
4864	Boa Esperança do Sul	26
4865	Bocaina	26
4866	Bofete	26
4867	Boituva	26
4868	Bom Jesus dos Perdões	26
4869	Bom Sucesso de Itararé	26
4870	Borá	26
4871	Boracéia	26
4872	Borborema	26
4873	Borebi	26
4874	Botucatu	26
4875	Bragança Paulista	26
4876	Braúna	26
4877	Brejo Alegre	26
4878	Brodowski	26
4879	Brotas	26
4880	Buri	26
4881	Buritama	26
4882	Buritizal	26
4883	Cabrália Paulista	26
4884	Cabreúva	26
4885	Caçapava	26
4886	Cachoeira Paulista	26
4887	Caconde	26
4888	Cafelândia	26
4889	Caiabu	26
4890	Caieiras	26
4891	Caiuá	26
4892	Cajamar	26
4893	Cajati	26
4894	Cajobi	26
4895	Cajuru	26
4896	Campina do Monte Alegre	26
4897	Campinas	26
4898	Campo Limpo Paulista	26
4899	Campos do Jordão	26
4900	Campos Novos Paulista	26
4901	Cananéia	26
4902	Canas	26
4903	Cândido Mota	26
4904	Cândido Rodrigues	26
4905	Canitar	26
4906	Capão Bonito	26
4907	Capela do Alto	26
4908	Capivari	26
4909	Caraguatatuba	26
4910	Carapicuíba	26
4911	Cardoso	26
4912	Casa Branca	26
4913	Cássia dos Coqueiros	26
4914	Castilho	26
4915	Catanduva	26
4916	Catiguá	26
4917	Cedral	26
4918	Cerqueira César	26
4919	Cerquilho	26
4920	Cesário Lange	26
4921	Charqueada	26
4922	Chavantes	26
4923	Clementina	26
4924	Colina	26
4925	Colômbia	26
4926	Conchal	26
4927	Conchas	26
4928	Cordeirópolis	26
4929	Coroados	26
4930	Coronel Macedo	26
4931	Corumbataí	26
4932	Cosmópolis	26
4933	Cosmorama	26
4934	Cotia	26
4935	Cravinhos	26
4936	Cristais Paulista	26
4937	Cruzália	26
4938	Cruzeiro	26
4939	Cubatão	26
4940	Cunha	26
4941	Descalvado	26
4942	Diadema	26
4943	Dirce Reis	26
4944	Divinolândia	26
4945	Dobrada	26
4946	Dois Córregos	26
4947	Dolcinópolis	26
4948	Dourado	26
4949	Dracena	26
4950	Duartina	26
4951	Dumont	26
4952	Echaporã	26
4953	Eldorado	26
4954	Elias Fausto	26
4955	Elisiário	26
4956	Embaúba	26
4957	Embu	26
4958	Embu-Guaçu	26
4959	Emilianópolis	26
4960	Engenheiro Coelho	26
4961	Espírito Santo do Pinhal	26
4962	Espírito Santo do Turvo	26
4963	Estiva Gerbi	26
4964	Estrela d'Oeste	26
4965	Estrela do Norte	26
4966	Euclides da Cunha Paulista	26
4967	Fartura	26
4968	Fernando Prestes	26
4969	Fernandópolis	26
4970	Fernão	26
4971	Ferraz de Vasconcelos	26
4972	Flora Rica	26
4973	Floreal	26
4974	Florínia	26
4975	Flórida Paulista	26
4976	Franca	26
4977	Francisco Morato	26
4978	Franco da Rocha	26
4979	Gabriel Monteiro	26
4980	Gália	26
4981	Garça	26
4982	Gastão Vidigal	26
4983	Gavião Peixoto	26
4984	General Salgado	26
4985	Getulina	26
4986	Glicério	26
4987	Guaiçara	26
4988	Guaimbê	26
4989	Guaíra	26
4990	Guapiaçu	26
4991	Guapiara	26
4992	Guará	26
4993	Guaraçaí	26
4994	Guaraci	26
4995	Guarani d'Oeste	26
4996	Guarantã	26
4997	Guararapes	26
4998	Guararema	26
4999	Guaratinguetá	26
5000	Guareí	26
5001	Guariba	26
5002	Guarujá	26
5003	Guarulhos	26
5004	Guatapará	26
5005	Guzolândia	26
5006	Herculândia	26
5007	Holambra	26
5008	Hortolândia	26
5009	Iacanga	26
5010	Iacri	26
5011	Iaras	26
5012	Ibaté	26
5013	Ibirá	26
5014	Ibirarema	26
5015	Ibitinga	26
5016	Ibiúna	26
5017	Icém	26
5018	Iepê	26
5019	Igaraçu do Tietê	26
5020	Igarapava	26
5021	Igaratá	26
5022	Iguape	26
5023	Ilha Comprida	26
5024	Ilha Solteira	26
5025	Ilhabela	26
5026	Indaiatuba	26
5027	Indiana	26
5028	Indiaporã	26
5029	Inúbia Paulista	26
5030	Ipauçu	26
5031	Iperó	26
5032	Ipeúna	26
5033	Ipiguá	26
5034	Iporanga	26
5035	Ipuã	26
5036	Iracemápolis	26
5037	Irapuã	26
5038	Irapuru	26
5039	Itaberá	26
5040	Itaí	26
5041	Itajobi	26
5042	Itaju	26
5043	Itanhaém	26
5044	Itaóca	26
5045	Itapecerica da Serra	26
5046	Itapetininga	26
5047	Itapeva	26
5048	Itapevi	26
5049	Itapira	26
5050	Itapirapuã Paulista	26
5051	Itápolis	26
5052	Itaporanga	26
5053	Itapuí	26
5054	Itapura	26
5055	Itaquaquecetuba	26
5056	Itararé	26
5057	Itariri	26
5058	Itatiba	26
5059	Itatinga	26
5060	Itirapina	26
5061	Itirapuã	26
5062	Itobi	26
5063	Itu	26
5064	Itupeva	26
5065	Ituverava	26
5066	Jaborandi	26
5067	Jaboticabal	26
5068	Jacareí	26
5069	Jaci	26
5070	Jacupiranga	26
5071	Jaguariúna	26
5072	Jales	26
5073	Jambeiro	26
5074	Jandira	26
5075	Jardinópolis	26
5076	Jarinu	26
5077	Jaú	26
5078	Jeriquara	26
5079	Joanópolis	26
5080	João Ramalho	26
5081	José Bonifácio	26
5082	Júlio Mesquita	26
5083	Jumirim	26
5084	Jundiaí	26
5085	Junqueirópolis	26
5086	Juquiá	26
5087	Juquitiba	26
5088	Lagoinha	26
5089	Laranjal Paulista	26
5090	Lavínia	26
5091	Lavrinhas	26
5092	Leme	26
5093	Lençóis Paulista	26
5094	Limeira	26
5095	Lindóia	26
5096	Lins	26
5097	Lorena	26
5098	Lourdes	26
5099	Louveira	26
5100	Lucélia	26
5101	Lucianópolis	26
5102	Luís Antônio	26
5103	Luiziânia	26
5104	Lupércio	26
5105	Lutécia	26
5106	Macatuba	26
5107	Macaubal	26
5108	Macedônia	26
5109	Magda	26
5110	Mairinque	26
5111	Mairiporã	26
5112	Manduri	26
5113	Marabá Paulista	26
5114	Maracaí	26
5115	Marapoama	26
5116	Mariápolis	26
5117	Marília	26
5118	Marinópolis	26
5119	Martinópolis	26
5120	Matão	26
5121	Mauá	26
5122	Mendonça	26
5123	Meridiano	26
5124	Mesópolis	26
5125	Miguelópolis	26
5126	Mineiros do Tietê	26
5127	Mira Estrela	26
5128	Miracatu	26
5129	Mirandópolis	26
5130	Mirante do Paranapanema	26
5131	Mirassol	26
5132	Mirassolândia	26
5133	Mococa	26
5134	Mogi das Cruzes	26
5135	Mogi-Guaçu	26
5136	Mogi-Mirim	26
5137	Mombuca	26
5138	Monções	26
5139	Mongaguá	26
5140	Monte Alegre do Sul	26
5141	Monte Alto	26
5142	Monte Aprazível	26
5143	Monte Azul Paulista	26
5144	Monte Castelo	26
5145	Monte Mor	26
5146	Monteiro Lobato	26
5147	Morro Agudo	26
5148	Morungaba	26
5149	Motuca	26
5150	Murutinga do Sul	26
5151	Nantes	26
5152	Narandiba	26
5153	Natividade da Serra	26
5154	Nazaré Paulista	26
5155	Neves Paulista	26
5156	Nhandeara	26
5157	Nipoã	26
5158	Nova Aliança	26
5159	Nova Campina	26
5160	Nova Canaã Paulista	26
5161	Nova Castilho	26
5162	Nova Europa	26
5163	Nova Granada	26
5164	Nova Guataporanga	26
5165	Nova Independência	26
5166	Nova Luzitânia	26
5167	Nova Odessa	26
5168	Novais	26
5169	Novo Horizonte	26
5170	Nuporanga	26
5171	Ocauçu	26
5172	Óleo	26
5173	Olímpia	26
5174	Onda Verde	26
5175	Oriente	26
5176	Orindiúva	26
5177	Orlândia	26
5178	Osasco	26
5179	Oscar Bressane	26
5180	Osvaldo Cruz	26
5181	Ourinhos	26
5182	Ouro Verde	26
5183	Ouroeste	26
5184	Pacaembu	26
5185	Palestina	26
5186	Palmares Paulista	26
5187	Palmeira d'Oeste	26
5188	Palmital	26
5189	Panorama	26
5190	Paraguaçu Paulista	26
5191	Paraibuna	26
5192	Paraíso	26
5193	Paranapanema	26
5194	Paranapuã	26
5195	Parapuã	26
5196	Pardinho	26
5197	Pariquera-Açu	26
5198	Parisi	26
5199	Patrocínio Paulista	26
5200	Paulicéia	26
5201	Paulínia	26
5202	Paulistânia	26
5203	Paulo de Faria	26
5204	Pederneiras	26
5205	Pedra Bela	26
5206	Pedranópolis	26
5207	Pedregulho	26
5208	Pedreira	26
5209	Pedrinhas Paulista	26
5210	Pedro de Toledo	26
5211	Penápolis	26
5212	Pereira Barreto	26
5213	Pereiras	26
5214	Peruíbe	26
5215	Piacatu	26
5216	Piedade	26
5217	Pilar do Sul	26
5218	Pindamonhangaba	26
5219	Pindorama	26
5220	Pinhalzinho	26
5221	Piquerobi	26
5222	Piquete	26
5223	Piracaia	26
5224	Piracicaba	26
5225	Piraju	26
5226	Pirajuí	26
5227	Pirangi	26
5228	Pirapora do Bom Jesus	26
5229	Pirapozinho	26
5230	Pirassununga	26
5231	Piratininga	26
5232	Pitangueiras	26
5233	Planalto	26
5234	Platina	26
5235	Poá	26
5236	Poloni	26
5237	Pompéia	26
5238	Pongaí	26
5239	Pontal	26
5240	Pontalinda	26
5241	Pontes Gestal	26
5242	Populina	26
5243	Porangaba	26
5244	Porto Feliz	26
5245	Porto Ferreira	26
5246	Potim	26
5247	Potirendaba	26
5248	Pracinha	26
5249	Pradópolis	26
5250	Praia Grande	26
5251	Pratânia	26
5252	Presidente Alves	26
5253	Presidente Bernardes	26
5254	Presidente Epitácio	26
5255	Presidente Prudente	26
5256	Presidente Venceslau	26
5257	Promissão	26
5258	Quadra	26
5259	Quatá	26
5260	Queiroz	26
5261	Queluz	26
5262	Quintana	26
5263	Rafard	26
5264	Rancharia	26
5265	Redenção da Serra	26
5266	Regente Feijó	26
5267	Reginópolis	26
5268	Registro	26
5269	Restinga	26
5270	Ribeira	26
5271	Ribeirão Bonito	26
5272	Ribeirão Branco	26
5273	Ribeirão Corrente	26
5274	Ribeirão do Sul	26
5275	Ribeirão dos Índios	26
5276	Ribeirão Grande	26
5277	Ribeirão Pires	26
5278	Ribeirão Preto	26
5279	Rifaina	26
5280	Rincão	26
5281	Rinópolis	26
5282	Rio Claro	26
5283	Rio das Pedras	26
5284	Rio Grande da Serra	26
5285	Riolândia	26
5286	Riversul	26
5287	Rosana	26
5288	Roseira	26
5289	Rubiácea	26
5290	Rubinéia	26
5291	Sabino	26
5292	Sagres	26
5293	Sales	26
5294	Sales Oliveira	26
5295	Salesópolis	26
5296	Salmourão	26
5297	Saltinho	26
5298	Salto	26
5299	Salto de Pirapora	26
5300	Salto Grande	26
5301	Sandovalina	26
5302	Santa Adélia	26
5303	Santa Albertina	26
5304	Santa Bárbara d'Oeste	26
5305	Santa Branca	26
5306	Santa Clara d'Oeste	26
5307	Santa Cruz da Conceição	26
5308	Santa Cruz da Esperança	26
5309	Santa Cruz das Palmeiras	26
5310	Santa Cruz do Rio Pardo	26
5311	Santa Ernestina	26
5312	Santa Fé do Sul	26
5313	Santa Gertrudes	26
5314	Santa Isabel	26
5315	Santa Lúcia	26
5316	Santa Maria da Serra	26
5317	Santa Mercedes	26
5318	Santa Rita d'Oeste	26
5319	Santa Rita do Passa Quatro	26
5320	Santa Rosa de Viterbo	26
5321	Santa Salete	26
5322	Santana da Ponte Pensa	26
5323	Santana de Parnaíba	26
5324	Santo Anastácio	26
5325	Santo André	26
5326	Santo Antônio da Alegria	26
5327	Santo Antônio de Posse	26
5328	Santo Antônio do Aracanguá	26
5329	Santo Antônio do Jardim	26
5330	Santo Antônio do Pinhal	26
5331	Santo Expedito	26
5332	Santópolis do Aguapeí	26
5333	Santos	26
5334	São Bento do Sapucaí	26
5335	São Bernardo do Campo	26
5336	São Caetano do Sul	26
5337	São Carlos	26
5338	São Francisco	26
5339	São João da Boa Vista	26
5340	São João das Duas Pontes	26
5341	São João de Iracema	26
5342	São João do Pau d'Alho	26
5343	São Joaquim da Barra	26
5344	São José da Bela Vista	26
5345	São José do Barreiro	26
5346	São José do Rio Pardo	26
5347	São José do Rio Preto	26
5348	São José dos Campos	26
5349	São Lourenço da Serra	26
5350	São Luís do Paraitinga	26
5351	São Manuel	26
5352	São Miguel Arcanjo	26
5353	São Paulo	26
5354	São Pedro	26
5355	São Pedro do Turvo	26
5356	São Roque	26
5357	São Sebastião	26
5358	São Sebastião da Grama	26
5359	São Simão	26
5360	São Vicente	26
5361	Sarapuí	26
5362	Sarutaiá	26
5363	Sebastianópolis do Sul	26
5364	Serra Azul	26
5365	Serra Negra	26
5366	Serrana	26
5367	Sertãozinho	26
5368	Sete Barras	26
5369	Severínia	26
5370	Silveiras	26
5371	Socorro	26
5372	Sorocaba	26
5373	Sud Mennucci	26
5374	Sumaré	26
5375	Suzanápolis	26
5376	Suzano	26
5377	Tabapuã	26
5378	Tabatinga	26
5379	Taboão da Serra	26
5380	Taciba	26
5381	Taguaí	26
5382	Taiaçu	26
5383	Taiúva	26
5384	Tambaú	26
5385	Tanabi	26
5386	Tapiraí	26
5387	Tapiratiba	26
5388	Taquaral	26
5389	Taquaritinga	26
5390	Taquarituba	26
5391	Taquarivaí	26
5392	Tarabai	26
5393	Tarumã	26
5394	Tatuí	26
5395	Taubaté	26
5396	Tejupá	26
5397	Teodoro Sampaio	26
5398	Terra Roxa	26
5399	Tietê	26
5400	Timburi	26
5401	Torre de Pedra	26
5402	Torrinha	26
5403	Trabiju	26
5404	Tremembé	26
5405	Três Fronteiras	26
5406	Tuiuti	26
5407	Tupã	26
5408	Tupi Paulista	26
5409	Turiúba	26
5410	Turmalina	26
5411	Ubarana	26
5412	Ubatuba	26
5413	Ubirajara	26
5414	Uchoa	26
5415	União Paulista	26
5416	Urânia	26
5417	Uru	26
5418	Urupês	26
5419	Valentim Gentil	26
5420	Valinhos	26
5421	Valparaíso	26
5422	Vargem	26
5423	Vargem Grande do Sul	26
5424	Vargem Grande Paulista	26
5425	Várzea Paulista	26
5426	Vera Cruz	26
5427	Vinhedo	26
5428	Viradouro	26
5429	Vista Alegre do Alto	26
5430	Vitória Brasil	26
5431	Votorantim	26
5432	Votuporanga	26
5433	Zacarias	26
5434	Abreulândia	27
5435	Aguiarnópolis	27
5436	Aliança do Tocantins	27
5437	Almas	27
5438	Alvorada	27
5439	Ananás	27
5440	Angico	27
5441	Aparecida do Rio Negro	27
5442	Aragominas	27
5443	Araguacema	27
5444	Araguaçu	27
5445	Araguaína	27
5446	Araguanã	27
5447	Araguatins	27
5448	Arapoema	27
5449	Arraias	27
5450	Augustinópolis	27
5451	Aurora do Tocantins	27
5452	Axixá do Tocantins	27
5453	Babaçulândia	27
5454	Bandeirantes do Tocantins	27
5455	Barra do Ouro	27
5456	Barrolândia	27
5457	Bernardo Sayão	27
5458	Bom Jesus do Tocantins	27
5459	Brasilândia do Tocantins	27
5460	Brejinho de Nazaré	27
5461	Buriti do Tocantins	27
5462	Cachoeirinha	27
5463	Campos Lindos	27
5464	Cariri do Tocantins	27
5465	Carmolândia	27
5466	Carrasco Bonito	27
5467	Caseara	27
5468	Centenário	27
5469	Chapada da Natividade	27
5470	Chapada de Areia	27
5471	Colinas do Tocantins	27
5472	Colméia	27
5473	Combinado	27
5474	Conceição do Tocantins	27
5475	Couto de Magalhães	27
5476	Cristalândia	27
5477	Crixás do Tocantins	27
5478	Darcinópolis	27
5479	Dianópolis	27
5480	Divinópolis do Tocantins	27
5481	Dois Irmãos do Tocantins	27
5482	Dueré	27
5483	Esperantina	27
5484	Fátima	27
5485	Figueirópolis	27
5486	Filadélfia	27
5487	Formoso do Araguaia	27
5488	Fortaleza do Tabocão	27
5489	Goianorte	27
5490	Goiatins	27
5491	Guaraí	27
5492	Gurupi	27
5493	Ipueiras	27
5494	Itacajá	27
5495	Itaguatins	27
5496	Itapiratins	27
5497	Itaporã do Tocantins	27
5498	Jaú do Tocantins	27
5499	Juarina	27
5500	Lagoa da Confusão	27
5501	Lagoa do Tocantins	27
5502	Lajeado	27
5503	Lavandeira	27
5504	Lizarda	27
5505	Luzinópolis	27
5506	Marianópolis do Tocantins	27
5507	Mateiros	27
5508	Maurilândia do Tocantins	27
5509	Miracema do Tocantins	27
5510	Miranorte	27
5511	Monte do Carmo	27
5512	Monte Santo do Tocantins	27
5513	Muricilândia	27
5514	Natividade	27
5515	Nazaré	27
5516	Nova Olinda	27
5517	Nova Rosalândia	27
5518	Novo Acordo	27
5519	Novo Alegre	27
5520	Novo Jardim	27
5521	Oliveira de Fátima	27
5522	Palmas	27
5523	Palmeirante	27
5524	Palmeiras do Tocantins	27
5525	Palmeirópolis	27
5526	Paraíso do Tocantins	27
5527	Paranã	27
5528	Pau d'Arco	27
5529	Pedro Afonso	27
5530	Peixe	27
5531	Pequizeiro	27
5532	Pindorama do Tocantins	27
5533	Piraquê	27
5534	Pium	27
5535	Ponte Alta do Bom Jesus	27
5536	Ponte Alta do Tocantins	27
5537	Porto Alegre do Tocantins	27
5538	Porto Nacional	27
5539	Praia Norte	27
5540	Presidente Kennedy	27
5541	Pugmil	27
5542	Recursolândia	27
5543	Riachinho	27
5544	Rio da Conceição	27
5545	Rio dos Bois	27
5546	Rio Sono	27
5547	Sampaio	27
5548	Sandolândia	27
5549	Santa Fé do Araguaia	27
5550	Santa Maria do Tocantins	27
5551	Santa Rita do Tocantins	27
5552	Santa Rosa do Tocantins	27
5553	Santa Tereza do Tocantins	27
5554	Santa Terezinha Tocantins	27
5555	São Bento do Tocantins	27
5556	São Félix do Tocantins	27
5557	São Miguel do Tocantins	27
5558	São Salvador do Tocantins	27
5559	São Sebastião do Tocantins	27
5560	São Valério da Natividade	27
5561	Silvanópolis	27
5562	Sítio Novo do Tocantins	27
5563	Sucupira	27
5564	Taguatinga	27
5565	Taipas do Tocantins	27
5566	Talismã	27
5567	Tocantínia	27
5568	Tocantinópolis	27
5569	Tupirama	27
5570	Tupiratins	27
5571	Wanderlândia	27
5572	Xambioá	27
\.


--
-- Data for Name: conditions; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.conditions (id, name) FROM stdin;
1	price_limit
2	date_limit
3	distance_limit_in_km
4	uses_limit
\.


--
-- Data for Name: countries; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.countries (id, country_name) FROM stdin;
1	Brazil
\.


--
-- Data for Name: coupons; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.coupons (id, coupom_code, discount_type, discount, used, price_limit, date_limit, distance_limit_in_km, uses_limit, free_delivery, is_active, updated_at, created_at) FROM stdin;
1	cupom_usos	percentage	10.30	0	\N	\N	\N	10	t	t	2022-04-08 09:11:26.900025-03	2022-04-08 09:11:26.900025-03
2	cupom_distancia	absolute_value	15.00	0	\N	\N	15	\N	t	t	2022-04-08 09:11:26.900025-03	2022-04-08 09:11:26.900025-03
3	cupom_data_preco	absolute_value	20.00	0	20.20	2022-01-10 00:00:00-03	\N	\N	f	t	2022-04-08 09:11:26.900025-03	2022-04-08 09:11:26.900025-03
\.


--
-- Data for Name: coupons_branches; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.coupons_branches (id, coupom_id, branch_id) FROM stdin;
1	1	7135c8c5-ce97-4125-964f-5dbd38ea9225
2	2	7135c8c5-ce97-4125-964f-5dbd38ea9225
3	2	88ec6aed-708a-426c-bfc7-d222a3167b91
4	3	7135c8c5-ce97-4125-964f-5dbd38ea9225
\.


--
-- Data for Name: coupons_conditions; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.coupons_conditions (id, coupom_id, condition_id) FROM stdin;
1	1	4
2	2	3
3	3	2
4	3	1
\.


--
-- Data for Name: customer_addresses; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.customer_addresses (id, customer_id, country_id, state_id, city_id, neighborhood, street, street_number, street_complement, postal_code, lat, lng, is_active, updated_at, created_at) FROM stdin;
7fccdcce-f827-4116-bcb6-2594dc60a0b9	ea957876-a2eb-4ca0-a8cd-e7f77372c769	1	1	1	Testelandia	Rua do Teste	123	123	30220000	-22.925477000000000	-43.205225000000000	t	2022-04-08 09:11:26.802444-03	2022-04-08 09:11:26.802444-03
44abc71e-331d-452f-a4d1-d7394f2b95d3	ea957876-a2eb-4ca0-a8cd-e7f77372c769	1	1	1	Outra TesteLandia	Rua do Teste 2	321	321	99999999	-22.925477000000000	-43.205225000000000	t	2022-04-08 09:11:26.802444-03	2022-04-08 09:11:26.802444-03
\.


--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.customers (id, whatsapp_number, whatsapp_id, email, first_name, middle_name, last_name, cpf, is_active, updated_at, created_at) FROM stdin;
ea957876-a2eb-4ca0-a8cd-e7f77372c769	5531993368575	5531993368575@c.us	customer1@teste.com	Customer	Teste	ONE	08891890057	t	2022-04-08 09:11:26.798495-03	2022-04-08 09:11:26.798495-03
19b81351-5ca1-4e48-ae93-a449f20cf9f2	5531875080715	5531875080715@c.us	customer2@teste.com	Customer	Teste	TWO	96128398081	t	2022-04-08 09:11:26.798495-03	2022-04-08 09:11:26.798495-03
e6f6b6f4-fa83-45af-ad02-d93923639c73	5531775080715	5531775080715@c.us	customer3@teste.com	Customer	Teste	THREE	25098789052	t	2022-04-08 09:11:26.798495-03	2022-04-08 09:11:26.798495-03
\.


--
-- Data for Name: delivery_types; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.delivery_types (id, delivery_type) FROM stdin;
1	delivery
2	counter_pickup
3	on_spot_consumption
\.


--
-- Data for Name: menus; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.menus (id, menu_name, image, description, is_active, updated_at, created_at) FROM stdin;
73e5e528-a999-420f-8cf6-b2797dd24e63	Pizzas	\N	Pizzas Boladas	t	2022-04-08 09:11:26.736192-03	2022-04-08 09:11:26.736192-03
9eec47f6-fc57-45ea-b456-fe430e9a224a	Sucos	\N	Sucos Bolados	t	2022-04-08 09:11:26.736192-03	2022-04-08 09:11:26.736192-03
c9c519cd-0d0c-4dc2-816e-45d2210fa8f4	Refris	\N	Refris Boladas	t	2022-04-08 09:11:26.736192-03	2022-04-08 09:11:26.736192-03
7a47931a-59ff-4606-b083-bc9b8c3ed8b3	Samdubas	\N	Samdubas Boladas	t	2022-04-08 09:11:26.736192-03	2022-04-08 09:11:26.736192-03
ea2a615f-ea3d-438f-b463-d4ec65236c4e	Massas	\N	Massas Boladas	t	2022-04-08 09:11:26.736192-03	2022-04-08 09:11:26.736192-03
d1079865-0cce-4722-bf77-51747a8c503f	Cervejas	\N	Cervejas Boladas	t	2022-04-08 09:11:26.736192-03	2022-04-08 09:11:26.736192-03
20b85890-3a68-4ea5-aad2-41cc1154e7c8	Drinks	\N	Drinks Boladas	t	2022-04-08 09:11:26.736192-03	2022-04-08 09:11:26.736192-03
\.


--
-- Data for Name: menus_products; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.menus_products (id, menu_id, product_id) FROM stdin;
1	73e5e528-a999-420f-8cf6-b2797dd24e63	a7fc2cbc-834f-4576-91a1-12a9715228b9
2	73e5e528-a999-420f-8cf6-b2797dd24e63	7ccf1dbd-6f8e-44bd-99cd-35b8b99513bb
3	73e5e528-a999-420f-8cf6-b2797dd24e63	3f9d1a73-b554-4977-b0f4-79a9724b109c
4	9eec47f6-fc57-45ea-b456-fe430e9a224a	a7fc2cbc-834f-4576-91a1-12a9715228b9
5	c9c519cd-0d0c-4dc2-816e-45d2210fa8f4	a7fc2cbc-834f-4576-91a1-12a9715228b9
6	7a47931a-59ff-4606-b083-bc9b8c3ed8b3	a7fc2cbc-834f-4576-91a1-12a9715228b9
7	ea2a615f-ea3d-438f-b463-d4ec65236c4e	a7fc2cbc-834f-4576-91a1-12a9715228b9
8	d1079865-0cce-4722-bf77-51747a8c503f	a7fc2cbc-834f-4576-91a1-12a9715228b9
9	20b85890-3a68-4ea5-aad2-41cc1154e7c8	a7fc2cbc-834f-4576-91a1-12a9715228b9
10	20b85890-3a68-4ea5-aad2-41cc1154e7c8	7ccf1dbd-6f8e-44bd-99cd-35b8b99513bb
\.


--
-- Data for Name: opening_hours; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.opening_hours (id, branch_id, monday, tuesday, wednesday, thursday, friday, saturday, sunday, updated_at, created_at) FROM stdin;
1	7135c8c5-ce97-4125-964f-5dbd38ea9225	{"hours": ["7:00", "18:00"], "isOpened": true, "overnight": false}	{"hours": ["7:00", "18:00"], "isOpened": true, "overnight": false}	{"hours": ["7:00", "18:00"], "isOpened": true, "overnight": false}	{"hours": ["7:00", "18:00"], "isOpened": true, "overnight": false}	{"hours": ["7:00", "18:00"], "isOpened": true, "overnight": false}	{"hours": ["7:00", "18:00"], "isOpened": true, "overnight": false}	{"hours": ["7:00", "18:00"], "isOpened": true, "overnight": false}	2022-04-08 09:11:26.748227-03	2022-04-08 09:11:26.748227-03
2	88ec6aed-708a-426c-bfc7-d222a3167b91	{"hours": ["7:00", "18:00"], "isOpened": true, "overnight": false}	{"hours": ["7:00", "18:00"], "isOpened": true, "overnight": false}	{"hours": ["7:00", "18:00"], "isOpened": true, "overnight": false}	{"hours": ["7:00", "18:00"], "isOpened": true, "overnight": false}	{"hours": ["7:00", "18:00"], "isOpened": true, "overnight": false}	{"hours": ["7:00", "18:00"], "isOpened": true, "overnight": false}	{"hours": ["7:00", "18:00"], "isOpened": true, "overnight": false}	2022-04-08 09:11:26.748227-03	2022-04-08 09:11:26.748227-03
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.orders (id, branch_id, customer_id, address_id, order_number, sub_total, delivery_type_id, delivery_fee, payment_method_id, discount, total_price, status, coupom_id, promotion_id, estimated_delivery_duration, distance_in_km, comments, dispatch_time, delivery_time, updated_at, created_at) FROM stdin;
cd0c8e99-173d-47d7-afeb-3656fb5c4497	7135c8c5-ce97-4125-964f-5dbd38ea9225	ea957876-a2eb-4ca0-a8cd-e7f77372c769	7fccdcce-f827-4116-bcb6-2594dc60a0b9	1	50.00	1	10.00	1	0.00	60.00	1	\N	\N	10.00	5.00	Entregar na portaria	\N	\N	2022-04-08 09:11:26.812346-03	2022-04-08 09:11:26.812346-03
522f29c2-1c5f-49e2-b3c1-fb800076c847	7135c8c5-ce97-4125-964f-5dbd38ea9225	ea957876-a2eb-4ca0-a8cd-e7f77372c769	44abc71e-331d-452f-a4d1-d7394f2b95d3	2	30.22	1	10.00	2	0.00	40.22	1	\N	\N	10.00	5.00	Entregar na portaria	\N	\N	2022-04-08 09:11:26.812346-03	2022-04-08 09:11:26.812346-03
3c2b8fe1-bf17-4003-b31b-8a08c5e1070b	7135c8c5-ce97-4125-964f-5dbd38ea9225	19b81351-5ca1-4e48-ae93-a449f20cf9f2	\N	3	20.00	3	10.00	2	0.00	30.00	1	\N	\N	20.00	5.00	Entregar na portaria	\N	\N	2022-04-08 09:11:26.812346-03	2022-04-08 09:11:26.812346-03
522dc52b-d399-4073-855a-dad09385b9d6	7135c8c5-ce97-4125-964f-5dbd38ea9225	19b81351-5ca1-4e48-ae93-a449f20cf9f2	\N	4	10.32	2	10.00	3	0.00	20.32	1	\N	\N	30.00	5.00	Entregar na portaria	\N	\N	2022-04-08 09:11:26.812346-03	2022-04-08 09:11:26.812346-03
5f078dce-4a5e-4953-9500-b3134c04863f	7135c8c5-ce97-4125-964f-5dbd38ea9225	e6f6b6f4-fa83-45af-ad02-d93923639c73	\N	5	10.00	2	0.00	4	0.00	10.00	1	\N	\N	30.00	5.00	Entregar na portaria	\N	\N	2022-04-08 09:11:26.812346-03	2022-04-08 09:11:26.812346-03
ecbcdef0-bc6e-46cb-a69b-fa44c8f09f7e	7135c8c5-ce97-4125-964f-5dbd38ea9225	e6f6b6f4-fa83-45af-ad02-d93923639c73	\N	6	50.22	3	10.00	1	0.00	60.22	1	\N	\N	10.00	5.00	Entregar na portaria	\N	\N	2022-04-08 09:11:26.812346-03	2022-04-08 09:11:26.812346-03
81f99ba3-bfea-46b0-90d4-28a9bebb7790	7135c8c5-ce97-4125-964f-5dbd38ea9225	ea957876-a2eb-4ca0-a8cd-e7f77372c769	44abc71e-331d-452f-a4d1-d7394f2b95d3	7	30.22	1	10.00	2	0.00	40.22	1	\N	\N	10.00	5.00	Entregar na portaria	\N	\N	2022-04-08 09:11:26.812346-03	2022-04-08 09:11:26.812346-03
00ee2081-f9f6-41b0-90e2-1165dd9f7baf	7135c8c5-ce97-4125-964f-5dbd38ea9225	19b81351-5ca1-4e48-ae93-a449f20cf9f2	\N	8	20.55	2	10.00	3	0.00	30.55	1	\N	\N	20.00	5.00	Entregar na portaria	\N	\N	2022-04-08 09:11:26.812346-03	2022-04-08 09:11:26.812346-03
39e9d144-f7fa-4fed-8d2b-78554177ff44	7135c8c5-ce97-4125-964f-5dbd38ea9225	19b81351-5ca1-4e48-ae93-a449f20cf9f2	\N	9	10.32	3	10.00	4	0.00	20.32	1	\N	\N	30.00	5.00	Entregar na portaria	\N	\N	2022-04-08 09:11:26.812346-03	2022-04-08 09:11:26.812346-03
74633049-acd1-47dd-9635-2a36a43c7ed6	7135c8c5-ce97-4125-964f-5dbd38ea9225	e6f6b6f4-fa83-45af-ad02-d93923639c73	\N	10	10.99	3	0.00	2	0.00	10.99	1	\N	\N	30.00	5.00	Entregar na portaria	\N	\N	2022-04-08 09:11:26.812346-03	2022-04-08 09:11:26.812346-03
\.


--
-- Data for Name: orders_products; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.orders_products (id, order_id, product_id, quantity, total_price, attributes) FROM stdin;
1	cd0c8e99-173d-47d7-afeb-3656fb5c4497	a7fc2cbc-834f-4576-91a1-12a9715228b9	1	10.10	[{"name": "M", "type": "sizes", "price": 10, "quantity": 1}, {"name": "borda queijo", "type": "additionals", "price": 2, "quantity": 2}, {"name": "catchup", "type": "additionals", "price": 0, "quantity": 5}]
2	cd0c8e99-173d-47d7-afeb-3656fb5c4497	a7fc2cbc-834f-4576-91a1-12a9715228b9	1	10.10	[{"name": "P", "type": "sizes", "price": 5, "quantity": 1}, {"name": "borda queijo", "type": "additionals", "price": 2, "quantity": 2}, {"name": "catchup", "type": "additionals", "price": 0, "quantity": 5}]
3	cd0c8e99-173d-47d7-afeb-3656fb5c4497	7ccf1dbd-6f8e-44bd-99cd-35b8b99513bb	2	10.10	\N
4	522f29c2-1c5f-49e2-b3c1-fb800076c847	a7fc2cbc-834f-4576-91a1-12a9715228b9	1	10.10	[{"name": "G", "type": "sizes", "price": 15, "quantity": 1}, {"name": "borda catupiry", "type": "additionals", "price": 4, "quantity": 2}, {"name": "catchup", "type": "additionals", "price": 0, "quantity": 5}]
5	522f29c2-1c5f-49e2-b3c1-fb800076c847	7ccf1dbd-6f8e-44bd-99cd-35b8b99513bb	3	10.10	\N
6	522f29c2-1c5f-49e2-b3c1-fb800076c847	3f9d1a73-b554-4977-b0f4-79a9724b109c	1	10.10	[{"name": "bacon", "type": "additionals", "price": 4, "quantity": 2}, {"name": "carne extra", "type": "additionals", "price": 6, "quantity": 5}]
7	3c2b8fe1-bf17-4003-b31b-8a08c5e1070b	3f9d1a73-b554-4977-b0f4-79a9724b109c	1	10.10	[{"name": "bacon", "type": "additionals", "price": 5, "quantity": 3}, {"name": "molho especial", "type": "additionals", "price": 3, "quantity": 2}]
8	522dc52b-d399-4073-855a-dad09385b9d6	a7fc2cbc-834f-4576-91a1-12a9715228b9	1	10.10	[{"name": "molho especial", "type": "additionals", "price": 3, "quantity": 2}]
9	522dc52b-d399-4073-855a-dad09385b9d6	7ccf1dbd-6f8e-44bd-99cd-35b8b99513bb	1	10.10	\N
10	5f078dce-4a5e-4953-9500-b3134c04863f	a7fc2cbc-834f-4576-91a1-12a9715228b9	1	10.10	[{"name": "G", "type": "sizes", "price": 15, "quantity": 1}]
11	5f078dce-4a5e-4953-9500-b3134c04863f	7ccf1dbd-6f8e-44bd-99cd-35b8b99513bb	1	10.10	\N
12	5f078dce-4a5e-4953-9500-b3134c04863f	3f9d1a73-b554-4977-b0f4-79a9724b109c	1	10.10	\N
13	ecbcdef0-bc6e-46cb-a69b-fa44c8f09f7e	3f9d1a73-b554-4977-b0f4-79a9724b109c	1	10.10	\N
14	81f99ba3-bfea-46b0-90d4-28a9bebb7790	a7fc2cbc-834f-4576-91a1-12a9715228b9	1	10.10	[{"name": "P", "type": "sizes", "price": 5, "quantity": 1}]
15	81f99ba3-bfea-46b0-90d4-28a9bebb7790	7ccf1dbd-6f8e-44bd-99cd-35b8b99513bb	3	10.10	\N
16	00ee2081-f9f6-41b0-90e2-1165dd9f7baf	a7fc2cbc-834f-4576-91a1-12a9715228b9	1	10.10	\N
17	00ee2081-f9f6-41b0-90e2-1165dd9f7baf	7ccf1dbd-6f8e-44bd-99cd-35b8b99513bb	1	10.10	\N
18	00ee2081-f9f6-41b0-90e2-1165dd9f7baf	3f9d1a73-b554-4977-b0f4-79a9724b109c	1	10.10	\N
19	39e9d144-f7fa-4fed-8d2b-78554177ff44	3f9d1a73-b554-4977-b0f4-79a9724b109c	1	10.10	\N
20	74633049-acd1-47dd-9635-2a36a43c7ed6	3f9d1a73-b554-4977-b0f4-79a9724b109c	1	10.10	\N
\.


--
-- Data for Name: payment_methods; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.payment_methods (id, payment_method) FROM stdin;
1	money
2	pix
3	credit
4	debit
5	alelo_meal
6	alelo_food
7	sodexo_meal
8	sodexo_food
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.products (id, category_id, name, image, attributes, base_price, description, ingredients, avaiability, is_active, updated_at, created_at) FROM stdin;
a7fc2cbc-834f-4576-91a1-12a9715228b9	1	Pizza Calabresa	\N	[{"type": "sizes", "options": [{"id": "f6f04e13-7874-42c9-ac63-a77400fde6c8", "max": null, "min": null, "name": "P", "price": 5, "description": "Pizza 15cm"}, {"id": "cac5fb6a-8bbc-45cc-bb7b-1fee303a4c5d", "max": null, "min": null, "name": "M", "price": 10, "description": "Pizza 20cm"}, {"id": "70b9d463-555d-4a56-a51f-01836982312b", "max": null, "min": null, "name": "G", "price": 15, "description": "Pizza 30cm"}]}, {"type": "additionals", "options": [{"id": "932258bd-90e3-4581-a567-37b2144bf62e", "max": null, "min": null, "name": "borda queijo", "price": 2, "description": "Borda recheada com queijo"}, {"id": "a90089f0-bbe1-4ae5-9617-0a19d7e234a8", "max": null, "min": null, "name": "borda catupiry", "price": 4, "description": "Borda recheada com catupiry"}, {"id": "a9c207a0-9ef4-4f86-8bb1-c4ae97982840", "max": null, "min": null, "name": "catchup", "price": 0, "description": "Sachês de catchup (por conta da casa)"}]}]	20.00	Pizza de calabresa à moda da casa	{Calabresa,Tomate,Mussarela,Orégano}	{6,7}	t	2022-04-08 09:11:26.771952-03	2022-04-08 09:11:26.771952-03
7ccf1dbd-6f8e-44bd-99cd-35b8b99513bb	2	Suco de Laranja	\N	[]	5.00	Suco de laranja caseiro	{Laranja,Açucar}	{1}	t	2022-04-08 09:11:26.771952-03	2022-04-08 09:11:26.771952-03
3f9d1a73-b554-4977-b0f4-79a9724b109c	1	Hambúrger da casa	\N	[{"type": "additionals", "options": [{"id": "3f023ad1-35b8-4c28-aafc-383ec0d484fd", "max": null, "min": null, "name": "bacon", "price": 5, "description": "3 fatias de bacon adicionais"}, {"id": "e3654a65-5c65-41e8-8e1c-efac14d6c191", "max": null, "min": null, "name": "carne extra", "price": 6, "description": "Carne adicional no seu burgão"}, {"id": "b6def3b0-6051-4e0e-8a85-7cc5ad0bf8bc", "max": null, "min": null, "name": "molho especial", "price": 3, "description": "Molho especial da casa"}]}]	30.00	Burgão violento, gigante!!	{Pão,"Carne artesanal",Alface,Tomate,"Molho da casa"}	{1}	t	2022-04-08 09:11:26.771952-03	2022-04-08 09:11:26.771952-03
702a03e4-7512-43fd-82e9-b3d608db77fd	1	Hambúrger da casa 666!	\N	[{"type": "additionals", "options": [{"id": "092189ea-1550-4e06-8973-68ff1cccb435", "max": null, "min": null, "name": "bacon", "price": 5, "description": "3 fatias de bacon adicionais"}, {"id": "c1cff1ba-9d75-45c4-b5d8-3f1b1a6d7a23", "max": null, "min": null, "name": "carne extra", "price": 6, "description": "Carne adicional no seu burgão"}, {"id": "441c1f64-fb6d-4b89-b450-c478ac12749a", "max": null, "min": null, "name": "molho especial", "price": 3, "description": "Molho especial da casa"}]}]	30.00	Burgão violento, gigante!!	{Pão,"Carne artesanal",Alface,Tomate,"Molho da casa"}	{1}	t	2022-04-08 09:11:26.771952-03	2022-04-08 09:11:26.771952-03
\.


--
-- Data for Name: promotions; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.promotions (id, name, total_price, due_date, avaiability, is_active, image, updated_at, created_at) FROM stdin;
1	Super promoção 1	20.20	2022-02-01 00:00:00-03	{1,2,3,4,5,6,7}	t	\N	2022-04-08 09:11:26.865167-03	2022-04-08 09:11:26.865167-03
2	Super promoção 2	30.20	2022-02-01 00:00:00-03	{1,2,3,4,5,6,7}	t	\N	2022-04-08 09:11:26.865167-03	2022-04-08 09:11:26.865167-03
3	Super promoção 3	40.20	2022-02-01 00:00:00-03	{1,2,3,4,5,6,7}	t	\N	2022-04-08 09:11:26.865167-03	2022-04-08 09:11:26.865167-03
\.


--
-- Data for Name: promotions_products; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.promotions_products (id, promotion_id, product_id, attributes) FROM stdin;
1	1	a7fc2cbc-834f-4576-91a1-12a9715228b9	[{"id": "cac5fb6a-8bbc-45cc-bb7b-1fee303a4c5d", "name": "M", "type": "sizes", "price": 10, "quantity": 1}, {"id": "932258bd-90e3-4581-a567-37b2144bf62e", "name": "borda queijo", "type": "additionals", "price": 2, "quantity": 1}, {"id": "a9c207a0-9ef4-4f86-8bb1-c4ae97982840", "name": "catchup", "type": "additionals", "price": 0, "quantity": 5}]
2	1	7ccf1dbd-6f8e-44bd-99cd-35b8b99513bb	[]
3	1	3f9d1a73-b554-4977-b0f4-79a9724b109c	[{"id": "3f023ad1-35b8-4c28-aafc-383ec0d484fd", "name": "bacon", "type": "additionals", "price": 5, "quantity": 2}, {"id": "e3654a65-5c65-41e8-8e1c-efac14d6c191", "name": "carne extra", "type": "additionals", "price": 6, "quantity": 1}]
4	2	a7fc2cbc-834f-4576-91a1-12a9715228b9	[{"id": "f6f04e13-7874-42c9-ac63-a77400fde6c8", "name": "P", "type": "sizes", "price": 5, "quantity": 1}, {"id": "932258bd-90e3-4581-a567-37b2144bf62e", "name": "borda queijo", "type": "additionals", "price": 2, "quantity": 1}]
5	2	7ccf1dbd-6f8e-44bd-99cd-35b8b99513bb	[]
6	3	a7fc2cbc-834f-4576-91a1-12a9715228b9	[]
\.


--
-- Data for Name: states; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.states (id, state_name, state_code, country_id) FROM stdin;
1	Acre	AC	1
2	Alagoas	AL	1
3	Amazonas	AM	1
4	Amapá	AP	1
5	Bahia	BA	1
6	Ceará	CE	1
7	Distrito Federal	DF	1
8	Espírito Santo	ES	1
9	Goiás	GO	1
10	Maranhão	MA	1
11	Minas Gerais	MG	1
12	Mato Grosso do Sul	MS	1
13	Mato Grosso	MT	1
14	Pará	PA	1
15	Paraíba	PB	1
16	Pernambuco	PE	1
17	Piauí	PI	1
18	Paraná	PR	1
19	Rio de Janeiro	RJ	1
20	Rio Grande do Norte	RN	1
21	Rondônia	RO	1
22	Roraima	RR	1
23	Rio Grande do Sul	RS	1
24	Santa Catarina	SC	1
25	Sergipe	SE	1
26	São Paulo	SP	1
27	Tocantins	TO	1
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: leandro_parisi
--

COPY public.users (id, phone_number, bussiness_name, cnpj, email, owner_first_name, owner_middle_name, owner_last_name, owner_cpf, password, bot_name, logo, role, is_active, updated_at, created_at) FROM stdin;
e5ba12a9-5cda-4425-8049-b7b1b4f95a40	5531975080415	Quintal da Dirce	123456789	user@teste.com	Leandro	Parisi	Carvalho	123456789	$2b$10$9ua3/O4rzDAg3Yt2L110YO4o29hLRoAOJPBkhW.vX1JnMs6ntTKgy	Walle	\N	user	t	2022-04-08 09:11:26.433192-03	2022-04-08 09:11:26.433192-03
686989f1-2181-4dda-8fa3-26f7062970ab	5531975080416	Quintal da Dirce	987654321	user2@teste.com	Leandro	Parisi	Carvalho	987654321	$2b$10$lLKwkIfhnqDbtLfuqipl2.Sb2clkhqMUeynvL6mhPZ665mU5CnC8q	Walle	\N	user	t	2022-04-08 09:11:26.433192-03	2022-04-08 09:11:26.433192-03
\.


--
-- Name: branches_delivery_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.branches_delivery_types_id_seq', 5, true);


--
-- Name: branches_menus_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.branches_menus_id_seq', 7, true);


--
-- Name: branches_payment_methods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.branches_payment_methods_id_seq', 5, true);


--
-- Name: branches_products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.branches_products_id_seq', 6, true);


--
-- Name: branches_promotions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.branches_promotions_id_seq', 4, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.categories_id_seq', 3, true);


--
-- Name: cities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.cities_id_seq', 1, false);


--
-- Name: conditions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.conditions_id_seq', 1, false);


--
-- Name: countries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.countries_id_seq', 1, false);


--
-- Name: coupons_branches_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.coupons_branches_id_seq', 4, true);


--
-- Name: coupons_conditions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.coupons_conditions_id_seq', 4, true);


--
-- Name: coupons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.coupons_id_seq', 1, false);


--
-- Name: delivery_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.delivery_types_id_seq', 3, true);


--
-- Name: menus_products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.menus_products_id_seq', 10, true);


--
-- Name: opening_hours_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.opening_hours_id_seq', 2, true);


--
-- Name: orders_order_number_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.orders_order_number_seq', 10, true);


--
-- Name: orders_products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.orders_products_id_seq', 20, true);


--
-- Name: payment_methods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.payment_methods_id_seq', 8, true);


--
-- Name: promotions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.promotions_id_seq', 3, true);


--
-- Name: promotions_products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.promotions_products_id_seq', 6, true);


--
-- Name: states_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leandro_parisi
--

SELECT pg_catalog.setval('public.states_id_seq', 1, false);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: branches_delivery_types branches_delivery_types_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_delivery_types
    ADD CONSTRAINT branches_delivery_types_pkey PRIMARY KEY (id);


--
-- Name: branches_menus branches_menus_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_menus
    ADD CONSTRAINT branches_menus_pkey PRIMARY KEY (id);


--
-- Name: branches_payment_methods branches_payment_methods_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_payment_methods
    ADD CONSTRAINT branches_payment_methods_pkey PRIMARY KEY (id);


--
-- Name: branches branches_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches
    ADD CONSTRAINT branches_pkey PRIMARY KEY (id);


--
-- Name: branches_products branches_products_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_products
    ADD CONSTRAINT branches_products_pkey PRIMARY KEY (id);


--
-- Name: branches_promotions branches_promotions_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_promotions
    ADD CONSTRAINT branches_promotions_pkey PRIMARY KEY (id);


--
-- Name: branches branches_whatsapp_id_key; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches
    ADD CONSTRAINT branches_whatsapp_id_key UNIQUE (whatsapp_id);


--
-- Name: branches branches_whatsapp_number_key; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches
    ADD CONSTRAINT branches_whatsapp_number_key UNIQUE (whatsapp_number);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);


--
-- Name: conditions conditions_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.conditions
    ADD CONSTRAINT conditions_pkey PRIMARY KEY (id);


--
-- Name: countries countries_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (id);


--
-- Name: coupons_branches coupons_branches_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.coupons_branches
    ADD CONSTRAINT coupons_branches_pkey PRIMARY KEY (id);


--
-- Name: coupons_conditions coupons_conditions_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.coupons_conditions
    ADD CONSTRAINT coupons_conditions_pkey PRIMARY KEY (id);


--
-- Name: coupons coupons_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.coupons
    ADD CONSTRAINT coupons_pkey PRIMARY KEY (id);


--
-- Name: customer_addresses customer_addresses_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.customer_addresses
    ADD CONSTRAINT customer_addresses_pkey PRIMARY KEY (id);


--
-- Name: customers customers_email_key; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_email_key UNIQUE (email);


--
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);


--
-- Name: customers customers_whatsapp_id_key; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_whatsapp_id_key UNIQUE (whatsapp_id);


--
-- Name: customers customers_whatsapp_number_key; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_whatsapp_number_key UNIQUE (whatsapp_number);


--
-- Name: delivery_types delivery_types_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.delivery_types
    ADD CONSTRAINT delivery_types_pkey PRIMARY KEY (id);


--
-- Name: menus menus_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.menus
    ADD CONSTRAINT menus_pkey PRIMARY KEY (id);


--
-- Name: menus_products menus_products_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.menus_products
    ADD CONSTRAINT menus_products_pkey PRIMARY KEY (id);


--
-- Name: opening_hours opening_hours_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.opening_hours
    ADD CONSTRAINT opening_hours_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: orders_products orders_products_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.orders_products
    ADD CONSTRAINT orders_products_pkey PRIMARY KEY (id);


--
-- Name: payment_methods payment_methods_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.payment_methods
    ADD CONSTRAINT payment_methods_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: promotions promotions_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.promotions
    ADD CONSTRAINT promotions_pkey PRIMARY KEY (id);


--
-- Name: promotions_products promotions_products_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.promotions_products
    ADD CONSTRAINT promotions_products_pkey PRIMARY KEY (id);


--
-- Name: states states_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.states
    ADD CONSTRAINT states_pkey PRIMARY KEY (id);


--
-- Name: users users_cnpj_key; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_cnpj_key UNIQUE (cnpj);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_owner_cpf_key; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_owner_cpf_key UNIQUE (owner_cpf);


--
-- Name: users users_phone_number_key; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_phone_number_key UNIQUE (phone_number);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: branches_user_id; Type: INDEX; Schema: public; Owner: leandro_parisi
--

CREATE INDEX branches_user_id ON public.branches USING btree (user_id);


--
-- Name: branches_whatsapp_id; Type: INDEX; Schema: public; Owner: leandro_parisi
--

CREATE INDEX branches_whatsapp_id ON public.branches USING btree (whatsapp_id);


--
-- Name: branches_whatsapp_number; Type: INDEX; Schema: public; Owner: leandro_parisi
--

CREATE INDEX branches_whatsapp_number ON public.branches USING btree (whatsapp_number);


--
-- Name: coupons_coupom_code; Type: INDEX; Schema: public; Owner: leandro_parisi
--

CREATE INDEX coupons_coupom_code ON public.coupons USING btree (coupom_code);


--
-- Name: customers_cpf; Type: INDEX; Schema: public; Owner: leandro_parisi
--

CREATE INDEX customers_cpf ON public.customers USING btree (cpf);


--
-- Name: customers_whatsapp_id; Type: INDEX; Schema: public; Owner: leandro_parisi
--

CREATE INDEX customers_whatsapp_id ON public.customers USING btree (whatsapp_id);


--
-- Name: customers_whatsapp_number; Type: INDEX; Schema: public; Owner: leandro_parisi
--

CREATE INDEX customers_whatsapp_number ON public.customers USING btree (whatsapp_number);


--
-- Name: orders_branch_id; Type: INDEX; Schema: public; Owner: leandro_parisi
--

CREATE INDEX orders_branch_id ON public.orders USING btree (branch_id);


--
-- Name: orders_order_number; Type: INDEX; Schema: public; Owner: leandro_parisi
--

CREATE INDEX orders_order_number ON public.orders USING btree (order_number);


--
-- Name: users_cnpj; Type: INDEX; Schema: public; Owner: leandro_parisi
--

CREATE INDEX users_cnpj ON public.users USING btree (cnpj);


--
-- Name: branches branches_city_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches
    ADD CONSTRAINT branches_city_id_fkey FOREIGN KEY (city_id) REFERENCES public.cities(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: branches branches_country_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches
    ADD CONSTRAINT branches_country_id_fkey FOREIGN KEY (country_id) REFERENCES public.countries(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: branches_delivery_types branches_delivery_types_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_delivery_types
    ADD CONSTRAINT branches_delivery_types_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES public.branches(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: branches_delivery_types branches_delivery_types_delivery_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_delivery_types
    ADD CONSTRAINT branches_delivery_types_delivery_type_id_fkey FOREIGN KEY (delivery_type_id) REFERENCES public.delivery_types(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: branches_menus branches_menus_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_menus
    ADD CONSTRAINT branches_menus_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES public.branches(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: branches_menus branches_menus_menu_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_menus
    ADD CONSTRAINT branches_menus_menu_id_fkey FOREIGN KEY (menu_id) REFERENCES public.menus(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: branches_payment_methods branches_payment_methods_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_payment_methods
    ADD CONSTRAINT branches_payment_methods_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES public.branches(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: branches_payment_methods branches_payment_methods_payment_method_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_payment_methods
    ADD CONSTRAINT branches_payment_methods_payment_method_id_fkey FOREIGN KEY (payment_method_id) REFERENCES public.payment_methods(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: branches_products branches_products_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_products
    ADD CONSTRAINT branches_products_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES public.branches(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: branches_products branches_products_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_products
    ADD CONSTRAINT branches_products_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: branches_promotions branches_promotions_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_promotions
    ADD CONSTRAINT branches_promotions_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES public.branches(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: branches_promotions branches_promotions_promotion_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches_promotions
    ADD CONSTRAINT branches_promotions_promotion_id_fkey FOREIGN KEY (promotion_id) REFERENCES public.promotions(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: branches branches_state_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches
    ADD CONSTRAINT branches_state_id_fkey FOREIGN KEY (state_id) REFERENCES public.states(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: branches branches_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.branches
    ADD CONSTRAINT branches_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: cities cities_state_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_state_id_fkey FOREIGN KEY (state_id) REFERENCES public.states(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: coupons_branches coupons_branches_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.coupons_branches
    ADD CONSTRAINT coupons_branches_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES public.branches(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: coupons_branches coupons_branches_coupom_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.coupons_branches
    ADD CONSTRAINT coupons_branches_coupom_id_fkey FOREIGN KEY (coupom_id) REFERENCES public.coupons(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: coupons_conditions coupons_conditions_condition_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.coupons_conditions
    ADD CONSTRAINT coupons_conditions_condition_id_fkey FOREIGN KEY (condition_id) REFERENCES public.conditions(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: coupons_conditions coupons_conditions_coupom_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.coupons_conditions
    ADD CONSTRAINT coupons_conditions_coupom_id_fkey FOREIGN KEY (coupom_id) REFERENCES public.coupons(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: customer_addresses customer_addresses_city_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.customer_addresses
    ADD CONSTRAINT customer_addresses_city_id_fkey FOREIGN KEY (city_id) REFERENCES public.cities(id);


--
-- Name: customer_addresses customer_addresses_country_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.customer_addresses
    ADD CONSTRAINT customer_addresses_country_id_fkey FOREIGN KEY (country_id) REFERENCES public.countries(id);


--
-- Name: customer_addresses customer_addresses_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.customer_addresses
    ADD CONSTRAINT customer_addresses_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: customer_addresses customer_addresses_state_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.customer_addresses
    ADD CONSTRAINT customer_addresses_state_id_fkey FOREIGN KEY (state_id) REFERENCES public.states(id);


--
-- Name: menus_products menus_products_menu_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.menus_products
    ADD CONSTRAINT menus_products_menu_id_fkey FOREIGN KEY (menu_id) REFERENCES public.menus(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: menus_products menus_products_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.menus_products
    ADD CONSTRAINT menus_products_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: opening_hours opening_hours_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.opening_hours
    ADD CONSTRAINT opening_hours_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES public.branches(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: orders orders_address_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_address_id_fkey FOREIGN KEY (address_id) REFERENCES public.customer_addresses(id);


--
-- Name: orders orders_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES public.branches(id);


--
-- Name: orders orders_coupom_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_coupom_id_fkey FOREIGN KEY (coupom_id) REFERENCES public.coupons(id);


--
-- Name: orders orders_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id);


--
-- Name: orders orders_delivery_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_delivery_type_id_fkey FOREIGN KEY (delivery_type_id) REFERENCES public.delivery_types(id);


--
-- Name: orders orders_payment_method_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_payment_method_id_fkey FOREIGN KEY (payment_method_id) REFERENCES public.payment_methods(id);


--
-- Name: orders_products orders_products_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.orders_products
    ADD CONSTRAINT orders_products_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: orders_products orders_products_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.orders_products
    ADD CONSTRAINT orders_products_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: orders orders_promotion_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_promotion_id_fkey FOREIGN KEY (promotion_id) REFERENCES public.promotions(id);


--
-- Name: products products_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- Name: promotions_products promotions_products_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.promotions_products
    ADD CONSTRAINT promotions_products_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: promotions_products promotions_products_promotion_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.promotions_products
    ADD CONSTRAINT promotions_products_promotion_id_fkey FOREIGN KEY (promotion_id) REFERENCES public.promotions(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: states states_country_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: leandro_parisi
--

ALTER TABLE ONLY public.states
    ADD CONSTRAINT states_country_id_fkey FOREIGN KEY (country_id) REFERENCES public.countries(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

