create table users (
    id int primary key auto_increment,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    created_at timestamp default current_timestamp
    avatar varchar(255) not null
    role varchar(255) not null
);

create table admin (
    id int primary key auto_increment,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    created_at timestamp default current_timestamp
    avatar varchar(255) not null
    role varchar(255) not null
);

create table ruangan (
    id int primary key auto_increment,
    name varchar(255) not null,
    description varchar(255) not null,
    created_at timestamp default current_timestamp
    images varchar(255) not null
);

create table kursi (
    id int primary key auto_increment,
    name varchar(255) not null,
    description varchar(255) not null,
    created_at timestamp default current_timestamp
    ruangan_id int not null references ruangan(id) on delete cascade on update cascade
);

create table booking (
    id int primary key auto_increment,
    name varchar(255) not null,
    description varchar(255) not null,
    created_at timestamp default current_timestamp
    images varchar(255) not null
);

