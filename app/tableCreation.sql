
-- Teams Table
CREATE TABLE teams_t (
    team_id NUMBER PRIMARY KEY,
    team_name VARCHAR2(50)
);

-- User Table
CREATE TABLE user_t (
    user_id NUMBER PRIMARY KEY,
    user_name VARCHAR2(60),
    password VARCHAR2(32),
    team_id NUMBER,
    FOREIGN KEY (team_id) REFERENCES teams_t(team_id)
);

-- Category Table
CREATE TABLE category_t (
    category_id NUMBER PRIMARY KEY,
    category_name VARCHAR2(30)
);


-- Sub Category Table
CREATE TABLE sub_category_t (
    sub_category_id NUMBER PRIMARY KEY,
    sub_category_name VARCHAR2(50),
    category_id NUMBER,
    FOREIGN KEY (category_id) REFERENCES category_t(category_id)
);


-- Equipment Table
CREATE TABLE equipment_t (
    equipment_id NUMBER PRIMARY KEY,
    equipment_name VARCHAR2(50),
    sub_category_id NUMBER,
    team_id NUMBER,
    FOREIGN KEY (sub_category_id) REFERENCES sub_category_t(sub_category_id),
    FOREIGN KEY (team_id) REFERENCES teams_t(team_id)
);

-- Brands Table
CREATE TABLE brands_t (
    brand_id NUMBER PRIMARY KEY,
    brand_name VARCHAR2(60)
);

-- Model Table
CREATE TABLE model_t (
    model_id NUMBER PRIMARY KEY,
    model_name VARCHAR2(50),
    brand_id NUMBER,
    FOREIGN KEY (brand_id) REFERENCES brands_t(brand_id)
);


-- Items Table
CREATE TABLE items_t (
    item_id NUMBER PRIMARY KEY,
    item_name VARCHAR2(100),
    item_variation VARCHAR2(100),
    tag_id VARCHAR2(100),
    manufacture_no VARCHAR2(100),
    status_details VARCHAR2(100),
    line_name VARCHAR2(100),
    store_name VARCHAR2(100),
    present_factory VARCHAR2(100),
    license_no VARCHAR2(100),
    license_date DATE,
    rcv_no VARCHAR2(100),
    invoice_no VARCHAR2(100),
    po_no VARCHAR2(100),
    supplier VARCHAR2(100),
    owner_factory VARCHAR2(100),
    vendor_name VARCHAR2(100),
    unit_price VARCHAR2(20),
    currency VARCHAR2(10),
    physical_location VARCHAR2(50),
    ip_address VARCHAR2(50),
    host_name VARCHAR2(50),
    operating_system VARCHAR2(50),
    provisioned_space VARCHAR2(50),
    used_space VARCHAR2(10),
    memory_size VARCHAR2(10),
    ram_details VARCHAR2(10),
    cpu_model VARCHAR2(10),
    cpu_clock VARCHAR2(10),
    ethernet_details VARCHAR2(30),
    ship_date DATE,
    start_date DATE,
    expiration_date DATE,
    subnet_musk VARCHAR2(50),
    gateway VARCHAR2(50),
    dns VARCHAR2(50),
    platform VARCHAR2(50),
    remarks VARCHAR2(100),
    model_id NUMBER,
    equipment_id NUMBER,
    FOREIGN KEY (model_id) REFERENCES model_t(model_id),
    FOREIGN KEY (equipment_id) REFERENCES equipment_t(equipment_id)
);