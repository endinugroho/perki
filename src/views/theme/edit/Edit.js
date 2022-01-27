import React, { useEffect, useState } from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import { Modal,DatePicker,Input,Form, Radio, Select, Button} from 'antd';
import { useParams } from "react-router-dom";
import 'antd/dist/antd.css';
import axios from 'axios';
import moment from 'moment';
import { useHistory } from "react-router-dom";

const { Option } = Select;

const Edit = () => {
  const [kota,setKota] = useState([{propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Aceh Barat"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Aceh Barat Daya"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Aceh Besar"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Aceh Jaya"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Aceh Selatan"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Aceh Singkil"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Aceh Tamiang"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Aceh Tengah"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Aceh Tenggara"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Aceh Timur"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Aceh Utara"},
  {propinsi:"Sumatera Barat",kota:"Agam"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Alor"},
  {propinsi:"Maluku",kota:"Ambon"},
  {propinsi:"Sumatera Utara",kota:"Asahan"},
  {propinsi:"Papua",kota:"Asmat"},
  {propinsi:"Bali",kota:"Badung"},
  {propinsi:"Kalimantan Selatan",kota:"Balangan"},
  {propinsi:"Kalimantan Timur",kota:"Balikpapan"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Banda Aceh"},
  {propinsi:"Lampung",kota:"Bandar Lampung"},
  {propinsi:"Jawa Barat",kota:"Bandung"},
  {propinsi:"Jawa Barat",kota:"Bandung"},
  {propinsi:"Jawa Barat",kota:"Bandung Barat"},
  {propinsi:"Sulawesi Tengah",kota:"Banggai"},
  {propinsi:"Sulawesi Tengah",kota:"Banggai Kepulauan"},
  {propinsi:"Bangka Belitung",kota:"Bangka"},
  {propinsi:"Bangka Belitung",kota:"Bangka Barat"},
  {propinsi:"Bangka Belitung",kota:"Bangka Selatan"},
  {propinsi:"Bangka Belitung",kota:"Bangka Tengah"},
  {propinsi:"Jawa Timur",kota:"Bangkalan"},
  {propinsi:"Bali",kota:"Bangli"},
  {propinsi:"Kalimantan Selatan",kota:"Banjar"},
  {propinsi:"Jawa Barat",kota:"Banjar"},
  {propinsi:"Kalimantan Selatan",kota:"Banjarbaru"},
  {propinsi:"Kalimantan Selatan",kota:"Banjarmasin"},
  {propinsi:"Jawa Tengah",kota:"Banjarnegara"},
  {propinsi:"Sulawesi Selatan",kota:"Bantaeng"},
  {propinsi:"DI Yogyakarta",kota:"Bantul"},
  {propinsi:"Sumatera Selatan",kota:"Banyuasin"},
  {propinsi:"Jawa Tengah",kota:"Banyumas"},
  {propinsi:"Jawa Timur",kota:"Banyuwangi"},
  {propinsi:"Kalimantan Selatan",kota:"Barito Kuala"},
  {propinsi:"Kalimantan Tengah",kota:"Barito Selatan"},
  {propinsi:"Kalimantan Tengah",kota:"Barito Timur"},
  {propinsi:"Kalimantan Tengah",kota:"Barito Utara"},
  {propinsi:"Sulawesi Selatan",kota:"Barru"},
  {propinsi:"Kepulauan Riau",kota:"Batam"},
  {propinsi:"Jawa Tengah",kota:"Batang"},
  {propinsi:"Jambi",kota:"Batang Hari"},
  {propinsi:"Jawa Timur",kota:"Batu"},
  {propinsi:"Sumatera Utara",kota:"Batu Bara"},
  {propinsi:"Sulawesi Tenggara",kota:"Bau-Bau"},
  {propinsi:"Jawa Barat",kota:"Bekasi"},
  {propinsi:"Jawa Barat",kota:"Bekasi"},
  {propinsi:"Bangka Belitung",kota:"Belitung"},
  {propinsi:"Bangka Belitung",kota:"Belitung Timur"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Belu"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Bener Meriah"},
  {propinsi:"Riau",kota:"Bengkalis"},
  {propinsi:"Kalimantan Barat",kota:"Bengkayang"},
  {propinsi:"Bengkulu",kota:"Bengkulu"},
  {propinsi:"Bengkulu",kota:"Bengkulu Selatan"},
  {propinsi:"Bengkulu",kota:"Bengkulu Tengah"},
  {propinsi:"Bengkulu",kota:"Bengkulu Utara"},
  {propinsi:"Kalimantan Timur",kota:"Berau"},
  {propinsi:"Papua",kota:"Biak Numfor"},
  {propinsi:"Nusa Tenggara Barat (NTB)",kota:"Bima"},
  {propinsi:"Nusa Tenggara Barat (NTB)",kota:"Bima"},
  {propinsi:"Sumatera Utara",kota:"Binjai"},
  {propinsi:"Kepulauan Riau",kota:"Bintan"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Bireuen"},
  {propinsi:"Sulawesi Utara",kota:"Bitung"},
  {propinsi:"Jawa Timur",kota:"Blitar"},
  {propinsi:"Jawa Timur",kota:"Blitar"},
  {propinsi:"Jawa Tengah",kota:"Blora"},
  {propinsi:"Gorontalo",kota:"Boalemo"},
  {propinsi:"Jawa Barat",kota:"Bogor"},
  {propinsi:"Jawa Barat",kota:"Bogor"},
  {propinsi:"Jawa Timur",kota:"Bojonegoro"},
  {propinsi:"Sulawesi Utara",kota:"Bolaang Mongondow (Bolmong)"},
  {propinsi:"Sulawesi Utara",kota:"Bolaang Mongondow Selatan"},
  {propinsi:"Sulawesi Utara",kota:"Bolaang Mongondow Timur"},
  {propinsi:"Sulawesi Utara",kota:"Bolaang Mongondow Utara"},
  {propinsi:"Sulawesi Tenggara",kota:"Bombana"},
  {propinsi:"Jawa Timur",kota:"Bondowoso"},
  {propinsi:"Sulawesi Selatan",kota:"Bone"},
  {propinsi:"Gorontalo",kota:"Bone Bolango"},
  {propinsi:"Kalimantan Timur",kota:"Bontang"},
  {propinsi:"Papua",kota:"Boven Digoel"},
  {propinsi:"Jawa Tengah",kota:"Boyolali"},
  {propinsi:"Jawa Tengah",kota:"Brebes"},
  {propinsi:"Sumatera Barat",kota:"Bukittinggi"},
  {propinsi:"Bali",kota:"Buleleng"},
  {propinsi:"Sulawesi Selatan",kota:"Bulukumba"},
  {propinsi:"Kalimantan Utara",kota:"Bulungan (Bulongan)"},
  {propinsi:"Jambi",kota:"Bungo"},
  {propinsi:"Sulawesi Tengah",kota:"Buol"},
  {propinsi:"Maluku",kota:"Buru"},
  {propinsi:"Maluku",kota:"Buru Selatan"},
  {propinsi:"Sulawesi Tenggara",kota:"Buton"},
  {propinsi:"Sulawesi Tenggara",kota:"Buton Utara"},
  {propinsi:"Jawa Barat",kota:"Ciamis"},
  {propinsi:"Jawa Barat",kota:"Cianjur"},
  {propinsi:"Jawa Tengah",kota:"Cilacap"},
  {propinsi:"Banten",kota:"Cilegon"},
  {propinsi:"Jawa Barat",kota:"Cimahi"},
  {propinsi:"Jawa Barat",kota:"Cirebon"},
  {propinsi:"Jawa Barat",kota:"Cirebon"},
  {propinsi:"Sumatera Utara",kota:"Dairi"},
  {propinsi:"Papua",kota:"Deiyai (Deliyai)"},
  {propinsi:"Sumatera Utara",kota:"Deli Serdang"},
  {propinsi:"Jawa Tengah",kota:"Demak"},
  {propinsi:"Bali",kota:"Denpasar"},
  {propinsi:"Jawa Barat",kota:"Depok"},
  {propinsi:"Sumatera Barat",kota:"Dharmasraya"},
  {propinsi:"Papua",kota:"Dogiyai"},
  {propinsi:"Nusa Tenggara Barat (NTB)",kota:"Dompu"},
  {propinsi:"Sulawesi Tengah",kota:"Donggala"},
  {propinsi:"Riau",kota:"Dumai"},
  {propinsi:"Sumatera Selatan",kota:"Empat Lawang"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Ende"},
  {propinsi:"Sulawesi Selatan",kota:"Enrekang"},
  {propinsi:"Papua Barat",kota:"Fakfak"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Flores Timur"},
  {propinsi:"Jawa Barat",kota:"Garut"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Gayo Lues"},
  {propinsi:"Bali",kota:"Gianyar"},
  {propinsi:"Gorontalo",kota:"Gorontalo"},
  {propinsi:"Gorontalo",kota:"Gorontalo"},
  {propinsi:"Gorontalo",kota:"Gorontalo Utara"},
  {propinsi:"Sulawesi Selatan",kota:"Gowa"},
  {propinsi:"Jawa Timur",kota:"Gresik"},
  {propinsi:"Jawa Tengah",kota:"Grobogan"},
  {propinsi:"DI Yogyakarta",kota:"Gunung Kidul"},
  {propinsi:"Kalimantan Tengah",kota:"Gunung Mas"},
  {propinsi:"Sumatera Utara",kota:"Gunungsitoli"},
  {propinsi:"Maluku Utara",kota:"Halmahera Barat"},
  {propinsi:"Maluku Utara",kota:"Halmahera Selatan"},
  {propinsi:"Maluku Utara",kota:"Halmahera Tengah"},
  {propinsi:"Maluku Utara",kota:"Halmahera Timur"},
  {propinsi:"Maluku Utara",kota:"Halmahera Utara"},
  {propinsi:"Kalimantan Selatan",kota:"Hulu Sungai Selatan"},
  {propinsi:"Kalimantan Selatan",kota:"Hulu Sungai Tengah"},
  {propinsi:"Kalimantan Selatan",kota:"Hulu Sungai Utara"},
  {propinsi:"Sumatera Utara",kota:"Humbang Hasundutan"},
  {propinsi:"Riau",kota:"Indragiri Hilir"},
  {propinsi:"Riau",kota:"Indragiri Hulu"},
  {propinsi:"Jawa Barat",kota:"Indramayu"},
  {propinsi:"Papua",kota:"Intan Jaya"},
  {propinsi:"DKI Jakarta",kota:"Jakarta Barat"},
  {propinsi:"DKI Jakarta",kota:"Jakarta Pusat"},
  {propinsi:"DKI Jakarta",kota:"Jakarta Selatan"},
  {propinsi:"DKI Jakarta",kota:"Jakarta Timur"},
  {propinsi:"DKI Jakarta",kota:"Jakarta Utara"},
  {propinsi:"Jambi",kota:"Jambi"},
  {propinsi:"Papua",kota:"Jayapura"},
  {propinsi:"Papua",kota:"Jayapura"},
  {propinsi:"Papua",kota:"Jayawijaya"},
  {propinsi:"Jawa Timur",kota:"Jember"},
  {propinsi:"Bali",kota:"Jembrana"},
  {propinsi:"Sulawesi Selatan",kota:"Jeneponto"},
  {propinsi:"Jawa Tengah",kota:"Jepara"},
  {propinsi:"Jawa Timur",kota:"Jombang"},
  {propinsi:"Papua Barat",kota:"Kaimana"},
  {propinsi:"Riau",kota:"Kampar"},
  {propinsi:"Kalimantan Tengah",kota:"Kapuas"},
  {propinsi:"Kalimantan Barat",kota:"Kapuas Hulu"},
  {propinsi:"Jawa Tengah",kota:"Karanganyar"},
  {propinsi:"Bali",kota:"Karangasem"},
  {propinsi:"Jawa Barat",kota:"Karawang"},
  {propinsi:"Kepulauan Riau",kota:"Karimun"},
  {propinsi:"Sumatera Utara",kota:"Karo"},
  {propinsi:"Kalimantan Tengah",kota:"Katingan"},
  {propinsi:"Bengkulu",kota:"Kaur"},
  {propinsi:"Kalimantan Barat",kota:"Kayong Utara"},
  {propinsi:"Jawa Tengah",kota:"Kebumen"},
  {propinsi:"Jawa Timur",kota:"Kediri"},
  {propinsi:"Jawa Timur",kota:"Kediri"},
  {propinsi:"Papua",kota:"Keerom"},
  {propinsi:"Jawa Tengah",kota:"Kendal"},
  {propinsi:"Sulawesi Tenggara",kota:"Kendari"},
  {propinsi:"Bengkulu",kota:"Kepahiang"},
  {propinsi:"Kepulauan Riau",kota:"Kepulauan Anambas"},
  {propinsi:"Maluku",kota:"Kepulauan Aru"},
  {propinsi:"Sumatera Barat",kota:"Kepulauan Mentawai"},
  {propinsi:"Riau",kota:"Kepulauan Meranti"},
  {propinsi:"Sulawesi Utara",kota:"Kepulauan Sangihe"},
  {propinsi:"DKI Jakarta",kota:"Kepulauan Seribu"},
  {propinsi:"Sulawesi Utara",kota:"Kepulauan Siau Tagulandang Biaro (Sitaro)"},
  {propinsi:"Maluku Utara",kota:"Kepulauan Sula"},
  {propinsi:"Sulawesi Utara",kota:"Kepulauan Talaud"},
  {propinsi:"Papua",kota:"Kepulauan Yapen (Yapen Waropen)"},
  {propinsi:"Jambi",kota:"Kerinci"},
  {propinsi:"Kalimantan Barat",kota:"Ketapang"},
  {propinsi:"Jawa Tengah",kota:"Klaten"},
  {propinsi:"Bali",kota:"Klungkung"},
  {propinsi:"Sulawesi Tenggara",kota:"Kolaka"},
  {propinsi:"Sulawesi Tenggara",kota:"Kolaka Utara"},
  {propinsi:"Sulawesi Tenggara",kota:"Konawe"},
  {propinsi:"Sulawesi Tenggara",kota:"Konawe Selatan"},
  {propinsi:"Sulawesi Tenggara",kota:"Konawe Utara"},
  {propinsi:"Kalimantan Selatan",kota:"Kotabaru"},
  {propinsi:"Sulawesi Utara",kota:"Kotamobagu"},
  {propinsi:"Kalimantan Tengah",kota:"Kotawaringin Barat"},
  {propinsi:"Kalimantan Tengah",kota:"Kotawaringin Timur"},
  {propinsi:"Riau",kota:"Kuantan Singingi"},
  {propinsi:"Kalimantan Barat",kota:"Kubu Raya"},
  {propinsi:"Jawa Tengah",kota:"Kudus"},
  {propinsi:"DI Yogyakarta",kota:"Kulon Progo"},
  {propinsi:"Jawa Barat",kota:"Kuningan"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Kupang"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Kupang"},
  {propinsi:"Kalimantan Timur",kota:"Kutai Barat"},
  {propinsi:"Kalimantan Timur",kota:"Kutai Kartanegara"},
  {propinsi:"Kalimantan Timur",kota:"Kutai Timur"},
  {propinsi:"Sumatera Utara",kota:"Labuhan Batu"},
  {propinsi:"Sumatera Utara",kota:"Labuhan Batu Selatan"},
  {propinsi:"Sumatera Utara",kota:"Labuhan Batu Utara"},
  {propinsi:"Sumatera Selatan",kota:"Lahat"},
  {propinsi:"Kalimantan Tengah",kota:"Lamandau"},
  {propinsi:"Jawa Timur",kota:"Lamongan"},
  {propinsi:"Lampung",kota:"Lampung Barat"},
  {propinsi:"Lampung",kota:"Lampung Selatan"},
  {propinsi:"Lampung",kota:"Lampung Tengah"},
  {propinsi:"Lampung",kota:"Lampung Timur"},
  {propinsi:"Lampung",kota:"Lampung Utara"},
  {propinsi:"Kalimantan Barat",kota:"Landak"},
  {propinsi:"Sumatera Utara",kota:"Langkat"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Langsa"},
  {propinsi:"Papua",kota:"Lanny Jaya"},
  {propinsi:"Banten",kota:"Lebak"},
  {propinsi:"Bengkulu",kota:"Lebong"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Lembata"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Lhokseumawe"},
  {propinsi:"Sumatera Barat",kota:"Lima Puluh Koto/Kota"},
  {propinsi:"Kepulauan Riau",kota:"Lingga"},
  {propinsi:"Nusa Tenggara Barat (NTB)",kota:"Lombok Barat"},
  {propinsi:"Nusa Tenggara Barat (NTB)",kota:"Lombok Tengah"},
  {propinsi:"Nusa Tenggara Barat (NTB)",kota:"Lombok Timur"},
  {propinsi:"Nusa Tenggara Barat (NTB)",kota:"Lombok Utara"},
  {propinsi:"Sumatera Selatan",kota:"Lubuk Linggau"},
  {propinsi:"Jawa Timur",kota:"Lumajang"},
  {propinsi:"Sulawesi Selatan",kota:"Luwu"},
  {propinsi:"Sulawesi Selatan",kota:"Luwu Timur"},
  {propinsi:"Sulawesi Selatan",kota:"Luwu Utara"},
  {propinsi:"Jawa Timur",kota:"Madiun"},
  {propinsi:"Jawa Timur",kota:"Madiun"},
  {propinsi:"Jawa Tengah",kota:"Magelang"},
  {propinsi:"Jawa Tengah",kota:"Magelang"},
  {propinsi:"Jawa Timur",kota:"Magetan"},
  {propinsi:"Jawa Barat",kota:"Majalengka"},
  {propinsi:"Sulawesi Barat",kota:"Majene"},
  {propinsi:"Sulawesi Selatan",kota:"Makassar"},
  {propinsi:"Jawa Timur",kota:"Malang"},
  {propinsi:"Jawa Timur",kota:"Malang"},
  {propinsi:"Kalimantan Utara",kota:"Malinau"},
  {propinsi:"Maluku",kota:"Maluku Barat Daya"},
  {propinsi:"Maluku",kota:"Maluku Tengah"},
  {propinsi:"Maluku",kota:"Maluku Tenggara"},
  {propinsi:"Maluku",kota:"Maluku Tenggara Barat"},
  {propinsi:"Sulawesi Barat",kota:"Mamasa"},
  {propinsi:"Papua",kota:"Mamberamo Raya"},
  {propinsi:"Papua",kota:"Mamberamo Tengah"},
  {propinsi:"Sulawesi Barat",kota:"Mamuju"},
  {propinsi:"Sulawesi Barat",kota:"Mamuju Utara"},
  {propinsi:"Sulawesi Utara",kota:"Manado"},
  {propinsi:"Sumatera Utara",kota:"Mandailing Natal"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Manggarai"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Manggarai Barat"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Manggarai Timur"},
  {propinsi:"Papua Barat",kota:"Manokwari"},
  {propinsi:"Papua Barat",kota:"Manokwari Selatan"},
  {propinsi:"Papua",kota:"Mappi"},
  {propinsi:"Sulawesi Selatan",kota:"Maros"},
  {propinsi:"Nusa Tenggara Barat (NTB)",kota:"Mataram"},
  {propinsi:"Papua Barat",kota:"Maybrat"},
  {propinsi:"Sumatera Utara",kota:"Medan"},
  {propinsi:"Kalimantan Barat",kota:"Melawi"},
  {propinsi:"Jambi",kota:"Merangin"},
  {propinsi:"Papua",kota:"Merauke"},
  {propinsi:"Lampung",kota:"Mesuji"},
  {propinsi:"Lampung",kota:"Metro"},
  {propinsi:"Papua",kota:"Mimika"},
  {propinsi:"Sulawesi Utara",kota:"Minahasa"},
  {propinsi:"Sulawesi Utara",kota:"Minahasa Selatan"},
  {propinsi:"Sulawesi Utara",kota:"Minahasa Tenggara"},
  {propinsi:"Sulawesi Utara",kota:"Minahasa Utara"},
  {propinsi:"Jawa Timur",kota:"Mojokerto"},
  {propinsi:"Jawa Timur",kota:"Mojokerto"},
  {propinsi:"Sulawesi Tengah",kota:"Morowali"},
  {propinsi:"Sumatera Selatan",kota:"Muara Enim"},
  {propinsi:"Jambi",kota:"Muaro Jambi"},
  {propinsi:"Bengkulu",kota:"Muko Muko"},
  {propinsi:"Sulawesi Tenggara",kota:"Muna"},
  {propinsi:"Kalimantan Tengah",kota:"Murung Raya"},
  {propinsi:"Sumatera Selatan",kota:"Musi Banyuasin"},
  {propinsi:"Sumatera Selatan",kota:"Musi Rawas"},
  {propinsi:"Papua",kota:"Nabire"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Nagan Raya"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Nagekeo"},
  {propinsi:"Kepulauan Riau",kota:"Natuna"},
  {propinsi:"Papua",kota:"Nduga"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Ngada"},
  {propinsi:"Jawa Timur",kota:"Nganjuk"},
  {propinsi:"Jawa Timur",kota:"Ngawi"},
  {propinsi:"Sumatera Utara",kota:"Nias"},
  {propinsi:"Sumatera Utara",kota:"Nias Barat"},
  {propinsi:"Sumatera Utara",kota:"Nias Selatan"},
  {propinsi:"Sumatera Utara",kota:"Nias Utara"},
  {propinsi:"Kalimantan Utara",kota:"Nunukan"},
  {propinsi:"Sumatera Selatan",kota:"Ogan Ilir"},
  {propinsi:"Sumatera Selatan",kota:"Ogan Komering Ilir"},
  {propinsi:"Sumatera Selatan",kota:"Ogan Komering Ulu"},
  {propinsi:"Sumatera Selatan",kota:"Ogan Komering Ulu Selatan"},
  {propinsi:"Sumatera Selatan",kota:"Ogan Komering Ulu Timur"},
  {propinsi:"Jawa Timur",kota:"Pacitan"},
  {propinsi:"Sumatera Barat",kota:"Padang"},
  {propinsi:"Sumatera Utara",kota:"Padang Lawas"},
  {propinsi:"Sumatera Utara",kota:"Padang Lawas Utara"},
  {propinsi:"Sumatera Barat",kota:"Padang Panjang"},
  {propinsi:"Sumatera Barat",kota:"Padang Pariaman"},
  {propinsi:"Sumatera Utara",kota:"Padang Sidempuan"},
  {propinsi:"Sumatera Selatan",kota:"Pagar Alam"},
  {propinsi:"Sumatera Utara",kota:"Pakpak Bharat"},
  {propinsi:"Kalimantan Tengah",kota:"Palangka Raya"},
  {propinsi:"Sumatera Selatan",kota:"Palembang"},
  {propinsi:"Sulawesi Selatan",kota:"Palopo"},
  {propinsi:"Sulawesi Tengah",kota:"Palu"},
  {propinsi:"Jawa Timur",kota:"Pamekasan"},
  {propinsi:"Banten",kota:"Pandeglang"},
  {propinsi:"Jawa Barat",kota:"Pangandaran"},
  {propinsi:"Sulawesi Selatan",kota:"Pangkajene Kepulauan"},
  {propinsi:"Bangka Belitung",kota:"Pangkal Pinang"},
  {propinsi:"Papua",kota:"Paniai"},
  {propinsi:"Sulawesi Selatan",kota:"Parepare"},
  {propinsi:"Sumatera Barat",kota:"Pariaman"},
  {propinsi:"Sulawesi Tengah",kota:"Parigi Moutong"},
  {propinsi:"Sumatera Barat",kota:"Pasaman"},
  {propinsi:"Sumatera Barat",kota:"Pasaman Barat"},
  {propinsi:"Kalimantan Timur",kota:"Paser"},
  {propinsi:"Jawa Timur",kota:"Pasuruan"},
  {propinsi:"Jawa Timur",kota:"Pasuruan"},
  {propinsi:"Jawa Tengah",kota:"Pati"},
  {propinsi:"Sumatera Barat",kota:"Payakumbuh"},
  {propinsi:"Papua Barat",kota:"Pegunungan Arfak"},
  {propinsi:"Papua",kota:"Pegunungan Bintang"},
  {propinsi:"Jawa Tengah",kota:"Pekalongan"},
  {propinsi:"Jawa Tengah",kota:"Pekalongan"},
  {propinsi:"Riau",kota:"Pekanbaru"},
  {propinsi:"Riau",kota:"Pelalawan"},
  {propinsi:"Jawa Tengah",kota:"Pemalang"},
  {propinsi:"Sumatera Utara",kota:"Pematang Siantar"},
  {propinsi:"Kalimantan Timur",kota:"Penajam Paser Utara"},
  {propinsi:"Lampung",kota:"Pesawaran"},
  {propinsi:"Lampung",kota:"Pesisir Barat"},
  {propinsi:"Sumatera Barat",kota:"Pesisir Selatan"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Pidie"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Pidie Jaya"},
  {propinsi:"Sulawesi Selatan",kota:"Pinrang"},
  {propinsi:"Gorontalo",kota:"Pohuwato"},
  {propinsi:"Sulawesi Barat",kota:"Polewali Mandar"},
  {propinsi:"Jawa Timur",kota:"Ponorogo"},
  {propinsi:"Kalimantan Barat",kota:"Pontianak"},
  {propinsi:"Kalimantan Barat",kota:"Pontianak"},
  {propinsi:"Sulawesi Tengah",kota:"Poso"},
  {propinsi:"Sumatera Selatan",kota:"Prabumulih"},
  {propinsi:"Lampung",kota:"Pringsewu"},
  {propinsi:"Jawa Timur",kota:"Probolinggo"},
  {propinsi:"Jawa Timur",kota:"Probolinggo"},
  {propinsi:"Kalimantan Tengah",kota:"Pulang Pisau"},
  {propinsi:"Maluku Utara",kota:"Pulau Morotai"},
  {propinsi:"Papua",kota:"Puncak"},
  {propinsi:"Papua",kota:"Puncak Jaya"},
  {propinsi:"Jawa Tengah",kota:"Purbalingga"},
  {propinsi:"Jawa Barat",kota:"Purwakarta"},
  {propinsi:"Jawa Tengah",kota:"Purworejo"},
  {propinsi:"Papua Barat",kota:"Raja Ampat"},
  {propinsi:"Bengkulu",kota:"Rejang Lebong"},
  {propinsi:"Jawa Tengah",kota:"Rembang"},
  {propinsi:"Riau",kota:"Rokan Hilir"},
  {propinsi:"Riau",kota:"Rokan Hulu"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Rote Ndao"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Sabang"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Sabu Raijua"},
  {propinsi:"Jawa Tengah",kota:"Salatiga"},
  {propinsi:"Kalimantan Timur",kota:"Samarinda"},
  {propinsi:"Kalimantan Barat",kota:"Sambas"},
  {propinsi:"Sumatera Utara",kota:"Samosir"},
  {propinsi:"Jawa Timur",kota:"Sampang"},
  {propinsi:"Kalimantan Barat",kota:"Sanggau"},
  {propinsi:"Papua",kota:"Sarmi"},
  {propinsi:"Jambi",kota:"Sarolangun"},
  {propinsi:"Sumatera Barat",kota:"Sawah Lunto"},
  {propinsi:"Kalimantan Barat",kota:"Sekadau"},
  {propinsi:"Sulawesi Selatan",kota:"Selayar (Kepulauan Selayar)"},
  {propinsi:"Bengkulu",kota:"Seluma"},
  {propinsi:"Jawa Tengah",kota:"Semarang"},
  {propinsi:"Jawa Tengah",kota:"Semarang"},
  {propinsi:"Maluku",kota:"Seram Bagian Barat"},
  {propinsi:"Maluku",kota:"Seram Bagian Timur"},
  {propinsi:"Banten",kota:"Serang"},
  {propinsi:"Banten",kota:"Serang"},
  {propinsi:"Sumatera Utara",kota:"Serdang Bedagai"},
  {propinsi:"Kalimantan Tengah",kota:"Seruyan"},
  {propinsi:"Riau",kota:"Siak"},
  {propinsi:"Sumatera Utara",kota:"Sibolga"},
  {propinsi:"Sulawesi Selatan",kota:"Sidenreng Rappang/Rapang"},
  {propinsi:"Jawa Timur",kota:"Sidoarjo"},
  {propinsi:"Sulawesi Tengah",kota:"Sigi"},
  {propinsi:"Sumatera Barat",kota:"Sijunjung (Sawah Lunto Sijunjung)"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Sikka"},
  {propinsi:"Sumatera Utara",kota:"Simalungun"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Simeulue"},
  {propinsi:"Kalimantan Barat",kota:"Singkawang"},
  {propinsi:"Sulawesi Selatan",kota:"Sinjai"},
  {propinsi:"Kalimantan Barat",kota:"Sintang"},
  {propinsi:"Jawa Timur",kota:"Situbondo"},
  {propinsi:"DI Yogyakarta",kota:"Sleman"},
  {propinsi:"Sumatera Barat",kota:"Solok"},
  {propinsi:"Sumatera Barat",kota:"Solok"},
  {propinsi:"Sumatera Barat",kota:"Solok Selatan"},
  {propinsi:"Sulawesi Selatan",kota:"Soppeng"},
  {propinsi:"Papua Barat",kota:"Sorong"},
  {propinsi:"Papua Barat",kota:"Sorong"},
  {propinsi:"Papua Barat",kota:"Sorong Selatan"},
  {propinsi:"Jawa Tengah",kota:"Sragen"},
  {propinsi:"Jawa Barat",kota:"Subang"},
  {propinsi:"Nanggroe Aceh Darussalam (NAD)",kota:"Subulussalam"},
  {propinsi:"Jawa Barat",kota:"Sukabumi"},
  {propinsi:"Jawa Barat",kota:"Sukabumi"},
  {propinsi:"Kalimantan Tengah",kota:"Sukamara"},
  {propinsi:"Jawa Tengah",kota:"Sukoharjo"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Sumba Barat"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Sumba Barat Daya"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Sumba Tengah"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Sumba Timur"},
  {propinsi:"Nusa Tenggara Barat (NTB)",kota:"Sumbawa"},
  {propinsi:"Nusa Tenggara Barat (NTB)",kota:"Sumbawa Barat"},
  {propinsi:"Jawa Barat",kota:"Sumedang"},
  {propinsi:"Jawa Timur",kota:"Sumenep"},
  {propinsi:"Jambi",kota:"Sungaipenuh"},
  {propinsi:"Papua",kota:"Supiori"},
  {propinsi:"Jawa Timur",kota:"Surabaya"},
  {propinsi:"Jawa Tengah",kota:"Surakarta (Solo)"},
  {propinsi:"Kalimantan Selatan",kota:"Tabalong"},
  {propinsi:"Bali",kota:"Tabanan"},
  {propinsi:"Sulawesi Selatan",kota:"Takalar"},
  {propinsi:"Papua Barat",kota:"Tambrauw"},
  {propinsi:"Kalimantan Utara",kota:"Tana Tidung"},
  {propinsi:"Sulawesi Selatan",kota:"Tana Toraja"},
  {propinsi:"Kalimantan Selatan",kota:"Tanah Bumbu"},
  {propinsi:"Sumatera Barat",kota:"Tanah Datar"},
  {propinsi:"Kalimantan Selatan",kota:"Tanah Laut"},
  {propinsi:"Banten",kota:"Tangerang"},
  {propinsi:"Banten",kota:"Tangerang"},
  {propinsi:"Banten",kota:"Tangerang Selatan"},
  {propinsi:"Lampung",kota:"Tanggamus"},
  {propinsi:"Sumatera Utara",kota:"Tanjung Balai"},
  {propinsi:"Jambi",kota:"Tanjung Jabung Barat"},
  {propinsi:"Jambi",kota:"Tanjung Jabung Timur"},
  {propinsi:"Kepulauan Riau",kota:"Tanjung Pinang"},
  {propinsi:"Sumatera Utara",kota:"Tapanuli Selatan"},
  {propinsi:"Sumatera Utara",kota:"Tapanuli Tengah"},
  {propinsi:"Sumatera Utara",kota:"Tapanuli Utara"},
  {propinsi:"Kalimantan Selatan",kota:"Tapin"},
  {propinsi:"Kalimantan Utara",kota:"Tarakan"},
  {propinsi:"Jawa Barat",kota:"Tasikmalaya"},
  {propinsi:"Jawa Barat",kota:"Tasikmalaya"},
  {propinsi:"Sumatera Utara",kota:"Tebing Tinggi"},
  {propinsi:"Jambi",kota:"Tebo"},
  {propinsi:"Jawa Tengah",kota:"Tegal"},
  {propinsi:"Jawa Tengah",kota:"Tegal"},
  {propinsi:"Papua Barat",kota:"Teluk Bintuni"},
  {propinsi:"Papua Barat",kota:"Teluk Wondama"},
  {propinsi:"Jawa Tengah",kota:"Temanggung"},
  {propinsi:"Maluku Utara",kota:"Ternate"},
  {propinsi:"Maluku Utara",kota:"Tidore Kepulauan"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Timor Tengah Selatan"},
  {propinsi:"Nusa Tenggara Timur (NTT)",kota:"Timor Tengah Utara"},
  {propinsi:"Sumatera Utara",kota:"Toba Samosir"},
  {propinsi:"Sulawesi Tengah",kota:"Tojo Una-Una"},
  {propinsi:"Sulawesi Tengah",kota:"Toli-Toli"},
  {propinsi:"Papua",kota:"Tolikara"},
  {propinsi:"Sulawesi Utara",kota:"Tomohon"},
  {propinsi:"Sulawesi Selatan",kota:"Toraja Utara"},
  {propinsi:"Jawa Timur",kota:"Trenggalek"},
  {propinsi:"Maluku",kota:"Tual"},
  {propinsi:"Jawa Timur",kota:"Tuban"},
  {propinsi:"Lampung",kota:"Tulang Bawang"},
  {propinsi:"Lampung",kota:"Tulang Bawang Barat"},
  {propinsi:"Jawa Timur",kota:"Tulungagung"},
  {propinsi:"Sulawesi Selatan",kota:"Wajo"},
  {propinsi:"Sulawesi Tenggara",kota:"Wakatobi"},
  {propinsi:"Papua",kota:"Waropen"},
  {propinsi:"Lampung",kota:"Way Kanan"},
  {propinsi:"Jawa Tengah",kota:"Wonogiri"},
  {propinsi:"Jawa Tengah",kota:"Wonosobo"},
  {propinsi:"Papua",kota:"Yahukimo"},
  {propinsi:"Papua",kota:"Yalimo"},
  {propinsi:"DI Yogyakarta",kota:"Yogyakarta"}]);
  const [workshopprof,setWorkshopprof] = useState([
    // {profession:"GP",name:"WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)"},
    // {profession:"GP",name:"WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)"},
    // {profession:"GP",name:"WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)"},
    // {profession:"GP",name:"WS 7 (Comprehensive CV Risk Stratification)"},
    // {profession:"GP",name:"WS 9 (Practical Approach in Emergency Arrythmias)"},
    // {profession:"GP",name:"WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskulardi Lini Terdepan: Fokus pada Terapi Trombolitik)"},
    // {profession:"GP",name:"WS 11 (Rapid Echocardiography in Emergency Setting)"},
    // {profession:"GP",name:"WS 13 (Advanced in Diagnosing Acute Heart Failure)"},
    // {profession:"GP",name:"WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"},
    // {profession:"Cardiologist",name:"WS 1 (Pregnancy and Heart Disease: What is the Most Common Cardiovascular Problem on It?)"},
    // {profession:"Cardiologist",name:"WS 2 (Perioperative Cardiac Consultation)"},
    // {profession:"Cardiologist",name:"WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)"},
    // {profession:"Cardiologist",name:"WS 4 (Cardiac Injury in Chemotherapy Patient)"},
    // {profession:"Cardiologist",name:"WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)"},
    // {profession:"Cardiologist",name:"WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)"},
    // {profession:"Cardiologist",name:"WS 7 (Comprehensive CV Risk Stratification)"},
    // {profession:"Cardiologist",name:"WS 8 (Practical approach to non-invasive ventilation in acute heart failure)"},
    // {profession:"Cardiologist",name:"WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)"},
    // {profession:"Cardiologist",name:"WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)"},
    // {profession:"Cardiologist",name:"WS 15 (Cardiomyopathy Evaluation by Cardiac MR)"},
    // {profession:"Cardiologist",name:"WS 16 (Cardiac CT in Coronary Artery and Beyond)"},
    // {profession:"Cardiologist",name:"WS Indovasc 1 (Early Detection of Chronic Venous Insufficiency)"},
    // {profession:"Cardiologist",name:"WS Indovasc 2 (Vascular Doppler US)"},
    // {profession:"Cardiologist",name:"WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"},
    {profession:"Cardiologist",name:"WS 20 (Physiology Assessment and Intravascular Imaging (OCT) in Coronary Intervention)"},
    // {profession:"Other Specialist",name:"WS 1 (Pregnancy and Heart Disease: What is the Most Common Cardiovascular Problem on It?)"},
    // {profession:"Other Specialist",name:"WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)"},
    // {profession:"Other Specialist",name:"WS 4 (Cardiac Injury in Chemotherapy Patient)"},
    // {profession:"Other Specialist",name:"WS 7 (Comprehensive CV Risk Stratification)"},
    // {profession:"Other Specialist",name:"WS 8 (Practical approach to non-invasive ventilation in acute heart failure)"},
    // {profession:"Other Specialist",name:"WS 9 (Practical Approach in Emergency Arrythmias)"},
    // {profession:"Other Specialist",name:"WS 11 (Rapid Echocardiography in Emergency Setting)"},
    // {profession:"Other Specialist",name:"WS 13 (Advanced in Diagnosing Acute Heart Failure)"},
    // {profession:"Other Specialist",name:"WS 15 (Cardiomyopathy Evaluation by Cardiac MR)"},
    // {profession:"Other Specialist",name:"WS 16 (Cardiac CT in Coronary Artery and Beyond)"},
    // {profession:"Nurse or Paramedics",name:"Ws 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)"},
    // {profession:"Nurse or Paramedics",name:"WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskular di Lini Terdepan: Fokus pada Terapi Trombolitik)"},
    // {profession:"Medical Student",name:"WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)"},
    // {profession:"Medical Student",name:"WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)"},
    // {profession:"Medical Student",name:"WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)"},
    // {profession:"Medical Student",name:"WS 7 (Comprehensive CV Risk Stratification)"},
    // {profession:"Medical Student",name:"WS 9 (Practical Approach in Emergency Arrythmias)"},
    // {profession:"Medical Student",name:"WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskulardi Lini Terdepan: Fokus pada Terapi Trombolitik)"},
    // {profession:"Medical Student",name:"WS 11 (Rapid Echocardiography in Emergency Setting)"},
    // {profession:"Medical Student",name:"WS 13 (Advanced in Diagnosing Acute Heart Failure)"},
  ]);


  const [myform, setMyform] = useState({address:"",lastname:"",fullname:"",gender:"",placedob:"",dob:"",county:"Indonesia",province:"Jawa Timur",city:"Surabaya",email:"",emailconfirm:"",password:"",mobile:"",affliliation:"",officeph:""});
  const [step, setStep] = useState('Step1');
  const [idsponsor, setIdsponsor] = useState('');
  const [propinsiselect, setPropinsiselect] = useState('Jawa Timur');
  const [kotaselect, setKotaselect] = useState('Surabaya');
  const [professionselect, setProfessionselect] = useState('Cardiologist');
  const { id } = useParams();
  let history = useHistory();
  const [macamworkshop,setMacamworkshop] = useState([]);
  const [totalws,setTotalws] = useState(0);
  useEffect(() => {
    // console.log("id=",id);
    var idsponsor = localStorage.getItem("loginid");
    setIdsponsor(idsponsor);
    axios({
      url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
      // url: "http://localhost/perki/kirimdata.php",
      data: {mtd: "ANGGOTAID",id:id},
      contentType: "application/json",
      method: 'POST',
    })
      .then((data) => {
        // var temp = data.data;
        // console.log(data.data);
        setMyform({address:data.data[0].address,lastname:data.data[0].lastname,fullname:data.data[0].fullnamecert,gender:data.data[0].gender,placedob:data.data[0].placedob,dob:data.data[0].dob,county:data.data[0].county,province:data.data[0].province,city:data.data[0].city,email:data.data[0].email,emailconfirm:data.data[0].email,password:data.data[0].password,mobile:data.data[0].mobilephone,affiliation:data.data[0].affiliation,officeph:data.data[0].officeph});
        setProfessionselect(data.data[0].profession);
        setMacamworkshop(data.data[0].workshop.split(","));
        setTotalws(data.data[0].workshop.split(",").length);
        // setDatas(data.data);
        // var belumbayar=0;
        // // var temp = [];
        // for (const x of data.data)
        // {
        //   console.log(x.firstname);
        //   console.log(x.lastname);
        //   temp.push({
        //     firstname:x.firstname,
        //     lastname:x.lastname
        //   })
        // }
// var orderid="";
//         {data.data.filter(data => (data.paymentstatus==null || data.paymentstatus=="" )).map(data => {
//           console.log('masuk bro');

//           belumbayar = belumbayar+parseInt(data.total);
//             orderid=orderid+data.orderid+",";
//         })}          // console.log(JSON.parse(data.data));
//           // localStorage.setItem("loginid",temp.data);
//         setBelumterbayar(belumbayar);
//         setOrderidbelumterbayar(orderid);
      })
      .catch(() => {
        console.log('Internal server error');
      });

  }, []);

  const handleChange5 = (value) => {
    console.log(`selected ${value}`);
    setMacamworkshop(value);

    if (value.length>totalws) {

      alert("Workshop yang dipilih melebihi, silakan dikurangi");
    } else {
      setMyform({...myform,workshop:value});
    }
    // setPackageselect(value);
    // setHargatotal(value.split("#")[1]);

    // setHargatotal

  };


  const handleChange = (value) => {
    console.log(`selected ${value}`);

    setPropinsiselect(value);
    setKotaselect("");
  };

  const handleChange2 = (value) => {
    console.log(`selected ${value}`);

    setKotaselect(value);
  };
  const dateFormat = 'YYYY-MM-DD';

  const klikStep1 = () => {
    var emptytext="";
    console.log(step);
    if (step=="Step1")
    {

      if (macamworkshop.length>totalws) {
        alert("Workshop yang dipilih melebihi, silakan dikurangi");return;
      }

      if (myform.firstname==="") emptytext=emptytext+"first name,";
          if (myform.address==="") emptytext=emptytext+"address,";
        if (myform.fullname==="") emptytext=emptytext+"full name,";
        if (myform.gender==="") emptytext=emptytext+"gender,";
        if (myform.pob==="") emptytext=emptytext+"pob,";
        if (myform.dob==="") emptytext=emptytext+"dob,";
        if (myform.mobile==="") emptytext=emptytext+"mobile,";
        if (myform.affliliation==="") emptytext=emptytext+"affiliation,";
        // if (myform.officeph==="") emptytext=emptytext+"office ph,";

        if (emptytext.length>0) {
          Modal.info({
            title: 'This is a notification message',
            content: (
              <div>
                <p>{"Silakan "+emptytext+" diisi dulu"}</p>
              </div>
            ),
            onOk() {},
          });
          return;

        }
        // console.log({"id":id,"address":myform.address,"lastname":myform.lastname,"fullnamecert":myform.fullname,"gender":myform.gender,"placedob":myform.pob,"country":myform.county,"province":myform.province,"city":myform.city,"email":myform.email,"password":myform.password,"mobilephone":myform.mobile,"workshop":macamworkshop.toString(),"affiliation":myform.affiliation,"officemobilephone":myform.officeph,"mtd":'EDITANGGOTA'});
        axios({
          method: "POST",
          url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
          // url: "http://localhost/perki/kirimdata.php",
          data: {"id":id,"address":myform.address,"lastname":myform.lastname,"fullnamecert":myform.fullname,"gender":myform.gender,"placedob":myform.pob,"country":myform.county,"province":myform.province,"city":myform.city,"email":myform.email,"password":myform.password,"mobilephone":myform.mobile,"workshop":macamworkshop.toString(),"affiliation":myform.affiliation,"officemobilephone":myform.officeph,"mtd":'EDITANGGOTA'},
          contentType: "application/json",
        })
          .then((data) => {
            // console.log("data sponsorid",data.data);
            Modal.info({
              title: 'This is a notification message',
              content: (
                <div>
                  <p>{"Data sudah tersimpan"}</p>
                </div>
              ),
              onOk() {
                history.push('/theme/sponsor');

              },
            });
        })
          .catch(() => {
            console.log('Internal server error');
          });


        }    // }

  }

  return (
    <>
      <CCard>
        <CCardHeader>
          Edit Peserta
        </CCardHeader>
        <CCardBody>
      <CRow>
      <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Full Name cert</div>
          <Input placeholder="Full name cert"  value={myform.fullname} onChange={(e)=>setMyform({...myform,fullname:e.target.value})}  />
      </div>
      <div class="radioperki">Gender : </div>
      <Radio.Group name="radiogroup" defaultValue={1}  value={myform.gender} onChange={(e)=>setMyform({...myform,gender:e.target.value})}>
        <Radio value="Male" style={{marginLeft:"15px"}}>Male</Radio>
        <Radio value="Female">Female</Radio>
      </Radio.Group>
      <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Address</div>
          <Input placeholder="Address"  value={myform.address} onChange={(e)=>setMyform({...myform,address:e.target.value})}  />
      </div>
      {/* <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Email</div>
          <Input placeholder="Email" value={myform.email} onChange={(e)=>setMyform({...myform,email:e.target.value})} />
      </div>
      <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Confirm Email</div>
          <Input placeholder="Confirm Email" value={myform.emailconfirm} onChange={(e)=>setMyform({...myform,emailconfirm:e.target.value})} />
      </div>
      <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Password (for login)</div>
          <Input.Password placeholder="Password" value={myform.password} onChange={(e)=>setMyform({...myform,password:e.target.value})} />
      </div>
      <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Confirm Password (for login)</div>
          <Input.Password placeholder="Confirm Password" value={myform.passwordconfirm} onChange={(e)=>setMyform({...myform,passwordconfirm:e.target.value})} />
      </div> */}
      <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Mobile phone</div>
          <Input placeholder="Mobile phone" value={myform.mobile} onChange={(e)=>setMyform({...myform,mobile:e.target.value})} />
      </div>
      <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Affiliation</div>
          <Input placeholder="Affiliation" value={myform.affiliation} onChange={(e)=>setMyform({...myform,affliliation:e.target.value})} />
      </div>
      <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Office phone number1 </div>
          <Input placeholder="Office phone number" value={myform.officeph} onChange={(e)=>setMyform({...myform,officeph:e.target.value})} />
      </div>
      <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Macam Workshop{professionselect}-{macamworkshop}-{totalws}</div>
        <Select mode="multiple"  style={{width:"100%"}} onChange={(e)=>handleChange5(e)} value={macamworkshop}>
         {workshopprof.filter(ch => ch.profession === professionselect).map((item) =>(
          <Option value={item.name}>{item.name}</Option>

         ))  }

        </Select>
        </div>


      <div style={{width:"100%",textAlign:"right",paddingRight:"15px"}}>
      <Button type="primary" onClick={()=>klikStep1()}>Simpan</Button>
      </div>
      {/* <Button style={{marginLeft:"17px"}} htmlType="submit">Continue</Button> */}
      {/* {JSON.stringify(myform)} */}
      </CRow>


        </CCardBody>
      </CCard>
    </>
  )
}

export default Edit
