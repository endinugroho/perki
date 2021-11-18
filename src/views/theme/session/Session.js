import React, { useEffect, useState, createRef } from "react";
import classNames from "classnames";
import axios from "axios";
import DateCountdown from "react-date-countdown-timer";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CSpinner,
  CCardBody,
  CModal,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from "@coreui/react";
import { rgbToHex } from "@coreui/utils";
import { DocsLink } from "src/reusable";
import { Stepper } from "react-form-stepper";
import { Modal, DatePicker, Input, Form, Radio, Select, Button } from "antd";
import "antd/dist/antd.css";
import { mixed } from "yup/lib/locale";
import { useHistory } from "react-router-dom";
import generator from "generate-password";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { confirm } = Modal;
const FormItem = Form.Item;
const { Option } = Select;
const { Search } = Input;
const { TextArea } = Input;

const rowsColor = "#0075BC";
const headerColor = "#0075BC";
const borderColor = "#0075BC";

const ThemeView = () => {
  const [color, setColor] = useState("rgb(255, 255, 255)");
  const ref = createRef();

  useEffect(() => {
    const el = ref.current.parentNode.firstChild;
    const varColor = window
      .getComputedStyle(el)
      .getPropertyValue("background-color");
    setColor(varColor);
  }, [ref]);

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
        <tr style={{ border: "none" }}>
          <td className="text-muted">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr style={{ border: "none" }}>
          <td className="text-muted">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  );
};

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, "theme-color w-75 rounded mb-3");
  return (
    <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
      <div className={classes} style={{ paddingTop: "75%" }}></div>
      {children}
      <ThemeView />
    </CCol>
  );
};

const Colors = () => {
  const [step, setStep] = useState("Step1");
  const [propinsiselect, setPropinsiselect] = useState("Jawa Timur");
  const [kotaselect, setKotaselect] = useState("Surabaya");
  const [professionselect, setProfessionselect] = useState("Cardiologist");
  const [packageselect, setPackageselect] = useState("");
  const [hargatambahan, setHargatambahan] = useState("");
  const [hargatotal, setHargatotal] = useState("");
  const [hargapromo, setHargapromo] = useState(0);
  const [hargagrandtotal, setHargagrandtotal] = useState("");
  const [hargaservice, setHargaservice] = useState("");
  // const [hargatotal,setHargatotal] = useState('');
  const [macamworkshop, setMacamworkshop] = useState([]);
  const [jumlahworkshop, setJumlahworkshop] = useState(0);
  const [hargaworkshop, setHargaworkshop] = useState("500000");
  const [jumlahworkshopdipilih, setJumlahworkshopdipilih] = useState(0);
  const [pilih, setPilih] = useState(0);
  const [pilih2, setPilih2] = useState(0);
  const [kodevoucher, setKodevoucher] = useState("");
  const [myform, setMyform] = useState({
    firstname: "",
    lastname: "",
    fullname: "",
    gender: "",
    pob: "",
    dob: "",
    county: "Indonesia",
    province: "Jawa Timur",
    city: "Surabaya",
    email: "",
    emailconfirm: "",
    password: "",
    mobile: "",
    affliliation: "",
    officeph: "",
  });
  let history = useHistory();
  const [disable, setDisable] = useState(false);
  const [simposium, setSimposium] = useState("");
  const [idanggota, setIdanggota] = useState("");
  const [nama, setNama] = useState("");
  const [idsponsor, setIdsponsor] = useState("");
  const [anggota, setAnggota] = useState("");
  const [workshopku, setWorkshopku] = useState("");
  const [ws, setWs] = useState("-");
  const [hari, setHari] = useState("PERTAMA");
  const [visible, setVisible] = useState(false);
  // const [meetingid1,setMeetingid1] = useState("79190715224");
  const [meetingid1, setMeetingid1] = useState("83601178402");
  const [meetingid2, setMeetingid2] = useState("");
  const [meetingid3, setMeetingid3] = useState("");
  const [meetingid4, setMeetingid4] = useState("");
  const [meetingid5, setMeetingid5] = useState("");
  const [meetingid6, setMeetingid6] = useState("");
  const [meetingid7, setMeetingid7] = useState("");
  const [meetingid8, setMeetingid8] = useState("");
  const [meetingid9, setMeetingid9] = useState("");
  const [meetingid10, setMeetingid10] = useState("");
  const [tanggalmeeting, setTanggalmeeting] = useState(
    "'January 01, 2022 00:00:00 GMT+03:00'"
  );

  const [dataWs, setDataWs] = useState({});
  const [dataSympo, setDataSympo] = useState({});

  const [workshopprice, setWorkshopprice] = useState([
    { profession: "Medical Student", price: "IDR 10,000" },
    { profession: "GP", price: "IDR 300,000" },
    { profession: "Cardiologist", price: "IDR 500,000" },
    { profession: "Other Specialists", price: "IDR 500,000" },
    { profession: "Nurse or Paramedics", price: "IDR 150,000" },
  ]);

  const [kota, setKota] = useState([
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Aceh Barat" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Aceh Barat Daya" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Aceh Besar" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Aceh Jaya" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Aceh Selatan" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Aceh Singkil" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Aceh Tamiang" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Aceh Tengah" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Aceh Tenggara" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Aceh Timur" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Aceh Utara" },
    { propinsi: "Sumatera Barat", kota: "Agam" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Alor" },
    { propinsi: "Maluku", kota: "Ambon" },
    { propinsi: "Sumatera Utara", kota: "Asahan" },
    { propinsi: "Papua", kota: "Asmat" },
    { propinsi: "Bali", kota: "Badung" },
    { propinsi: "Kalimantan Selatan", kota: "Balangan" },
    { propinsi: "Kalimantan Timur", kota: "Balikpapan" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Banda Aceh" },
    { propinsi: "Lampung", kota: "Bandar Lampung" },
    { propinsi: "Jawa Barat", kota: "Bandung" },
    { propinsi: "Jawa Barat", kota: "Bandung" },
    { propinsi: "Jawa Barat", kota: "Bandung Barat" },
    { propinsi: "Sulawesi Tengah", kota: "Banggai" },
    { propinsi: "Sulawesi Tengah", kota: "Banggai Kepulauan" },
    { propinsi: "Bangka Belitung", kota: "Bangka" },
    { propinsi: "Bangka Belitung", kota: "Bangka Barat" },
    { propinsi: "Bangka Belitung", kota: "Bangka Selatan" },
    { propinsi: "Bangka Belitung", kota: "Bangka Tengah" },
    { propinsi: "Jawa Timur", kota: "Bangkalan" },
    { propinsi: "Bali", kota: "Bangli" },
    { propinsi: "Kalimantan Selatan", kota: "Banjar" },
    { propinsi: "Jawa Barat", kota: "Banjar" },
    { propinsi: "Kalimantan Selatan", kota: "Banjarbaru" },
    { propinsi: "Kalimantan Selatan", kota: "Banjarmasin" },
    { propinsi: "Jawa Tengah", kota: "Banjarnegara" },
    { propinsi: "Sulawesi Selatan", kota: "Bantaeng" },
    { propinsi: "DI Yogyakarta", kota: "Bantul" },
    { propinsi: "Sumatera Selatan", kota: "Banyuasin" },
    { propinsi: "Jawa Tengah", kota: "Banyumas" },
    { propinsi: "Jawa Timur", kota: "Banyuwangi" },
    { propinsi: "Kalimantan Selatan", kota: "Barito Kuala" },
    { propinsi: "Kalimantan Tengah", kota: "Barito Selatan" },
    { propinsi: "Kalimantan Tengah", kota: "Barito Timur" },
    { propinsi: "Kalimantan Tengah", kota: "Barito Utara" },
    { propinsi: "Sulawesi Selatan", kota: "Barru" },
    { propinsi: "Kepulauan Riau", kota: "Batam" },
    { propinsi: "Jawa Tengah", kota: "Batang" },
    { propinsi: "Jambi", kota: "Batang Hari" },
    { propinsi: "Jawa Timur", kota: "Batu" },
    { propinsi: "Sumatera Utara", kota: "Batu Bara" },
    { propinsi: "Sulawesi Tenggara", kota: "Bau-Bau" },
    { propinsi: "Jawa Barat", kota: "Bekasi" },
    { propinsi: "Jawa Barat", kota: "Bekasi" },
    { propinsi: "Bangka Belitung", kota: "Belitung" },
    { propinsi: "Bangka Belitung", kota: "Belitung Timur" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Belu" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Bener Meriah" },
    { propinsi: "Riau", kota: "Bengkalis" },
    { propinsi: "Kalimantan Barat", kota: "Bengkayang" },
    { propinsi: "Bengkulu", kota: "Bengkulu" },
    { propinsi: "Bengkulu", kota: "Bengkulu Selatan" },
    { propinsi: "Bengkulu", kota: "Bengkulu Tengah" },
    { propinsi: "Bengkulu", kota: "Bengkulu Utara" },
    { propinsi: "Kalimantan Timur", kota: "Berau" },
    { propinsi: "Papua", kota: "Biak Numfor" },
    { propinsi: "Nusa Tenggara Barat (NTB)", kota: "Bima" },
    { propinsi: "Nusa Tenggara Barat (NTB)", kota: "Bima" },
    { propinsi: "Sumatera Utara", kota: "Binjai" },
    { propinsi: "Kepulauan Riau", kota: "Bintan" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Bireuen" },
    { propinsi: "Sulawesi Utara", kota: "Bitung" },
    { propinsi: "Jawa Timur", kota: "Blitar" },
    { propinsi: "Jawa Timur", kota: "Blitar" },
    { propinsi: "Jawa Tengah", kota: "Blora" },
    { propinsi: "Gorontalo", kota: "Boalemo" },
    { propinsi: "Jawa Barat", kota: "Bogor" },
    { propinsi: "Jawa Barat", kota: "Bogor" },
    { propinsi: "Jawa Timur", kota: "Bojonegoro" },
    { propinsi: "Sulawesi Utara", kota: "Bolaang Mongondow (Bolmong)" },
    { propinsi: "Sulawesi Utara", kota: "Bolaang Mongondow Selatan" },
    { propinsi: "Sulawesi Utara", kota: "Bolaang Mongondow Timur" },
    { propinsi: "Sulawesi Utara", kota: "Bolaang Mongondow Utara" },
    { propinsi: "Sulawesi Tenggara", kota: "Bombana" },
    { propinsi: "Jawa Timur", kota: "Bondowoso" },
    { propinsi: "Sulawesi Selatan", kota: "Bone" },
    { propinsi: "Gorontalo", kota: "Bone Bolango" },
    { propinsi: "Kalimantan Timur", kota: "Bontang" },
    { propinsi: "Papua", kota: "Boven Digoel" },
    { propinsi: "Jawa Tengah", kota: "Boyolali" },
    { propinsi: "Jawa Tengah", kota: "Brebes" },
    { propinsi: "Sumatera Barat", kota: "Bukittinggi" },
    { propinsi: "Bali", kota: "Buleleng" },
    { propinsi: "Sulawesi Selatan", kota: "Bulukumba" },
    { propinsi: "Kalimantan Utara", kota: "Bulungan (Bulongan)" },
    { propinsi: "Jambi", kota: "Bungo" },
    { propinsi: "Sulawesi Tengah", kota: "Buol" },
    { propinsi: "Maluku", kota: "Buru" },
    { propinsi: "Maluku", kota: "Buru Selatan" },
    { propinsi: "Sulawesi Tenggara", kota: "Buton" },
    { propinsi: "Sulawesi Tenggara", kota: "Buton Utara" },
    { propinsi: "Jawa Barat", kota: "Ciamis" },
    { propinsi: "Jawa Barat", kota: "Cianjur" },
    { propinsi: "Jawa Tengah", kota: "Cilacap" },
    { propinsi: "Banten", kota: "Cilegon" },
    { propinsi: "Jawa Barat", kota: "Cimahi" },
    { propinsi: "Jawa Barat", kota: "Cirebon" },
    { propinsi: "Jawa Barat", kota: "Cirebon" },
    { propinsi: "Sumatera Utara", kota: "Dairi" },
    { propinsi: "Papua", kota: "Deiyai (Deliyai)" },
    { propinsi: "Sumatera Utara", kota: "Deli Serdang" },
    { propinsi: "Jawa Tengah", kota: "Demak" },
    { propinsi: "Bali", kota: "Denpasar" },
    { propinsi: "Jawa Barat", kota: "Depok" },
    { propinsi: "Sumatera Barat", kota: "Dharmasraya" },
    { propinsi: "Papua", kota: "Dogiyai" },
    { propinsi: "Nusa Tenggara Barat (NTB)", kota: "Dompu" },
    { propinsi: "Sulawesi Tengah", kota: "Donggala" },
    { propinsi: "Riau", kota: "Dumai" },
    { propinsi: "Sumatera Selatan", kota: "Empat Lawang" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Ende" },
    { propinsi: "Sulawesi Selatan", kota: "Enrekang" },
    { propinsi: "Papua Barat", kota: "Fakfak" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Flores Timur" },
    { propinsi: "Jawa Barat", kota: "Garut" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Gayo Lues" },
    { propinsi: "Bali", kota: "Gianyar" },
    { propinsi: "Gorontalo", kota: "Gorontalo" },
    { propinsi: "Gorontalo", kota: "Gorontalo" },
    { propinsi: "Gorontalo", kota: "Gorontalo Utara" },
    { propinsi: "Sulawesi Selatan", kota: "Gowa" },
    { propinsi: "Jawa Timur", kota: "Gresik" },
    { propinsi: "Jawa Tengah", kota: "Grobogan" },
    { propinsi: "DI Yogyakarta", kota: "Gunung Kidul" },
    { propinsi: "Kalimantan Tengah", kota: "Gunung Mas" },
    { propinsi: "Sumatera Utara", kota: "Gunungsitoli" },
    { propinsi: "Maluku Utara", kota: "Halmahera Barat" },
    { propinsi: "Maluku Utara", kota: "Halmahera Selatan" },
    { propinsi: "Maluku Utara", kota: "Halmahera Tengah" },
    { propinsi: "Maluku Utara", kota: "Halmahera Timur" },
    { propinsi: "Maluku Utara", kota: "Halmahera Utara" },
    { propinsi: "Kalimantan Selatan", kota: "Hulu Sungai Selatan" },
    { propinsi: "Kalimantan Selatan", kota: "Hulu Sungai Tengah" },
    { propinsi: "Kalimantan Selatan", kota: "Hulu Sungai Utara" },
    { propinsi: "Sumatera Utara", kota: "Humbang Hasundutan" },
    { propinsi: "Riau", kota: "Indragiri Hilir" },
    { propinsi: "Riau", kota: "Indragiri Hulu" },
    { propinsi: "Jawa Barat", kota: "Indramayu" },
    { propinsi: "Papua", kota: "Intan Jaya" },
    { propinsi: "DKI Jakarta", kota: "Jakarta Barat" },
    { propinsi: "DKI Jakarta", kota: "Jakarta Pusat" },
    { propinsi: "DKI Jakarta", kota: "Jakarta Selatan" },
    { propinsi: "DKI Jakarta", kota: "Jakarta Timur" },
    { propinsi: "DKI Jakarta", kota: "Jakarta Utara" },
    { propinsi: "Jambi", kota: "Jambi" },
    { propinsi: "Papua", kota: "Jayapura" },
    { propinsi: "Papua", kota: "Jayapura" },
    { propinsi: "Papua", kota: "Jayawijaya" },
    { propinsi: "Jawa Timur", kota: "Jember" },
    { propinsi: "Bali", kota: "Jembrana" },
    { propinsi: "Sulawesi Selatan", kota: "Jeneponto" },
    { propinsi: "Jawa Tengah", kota: "Jepara" },
    { propinsi: "Jawa Timur", kota: "Jombang" },
    { propinsi: "Papua Barat", kota: "Kaimana" },
    { propinsi: "Riau", kota: "Kampar" },
    { propinsi: "Kalimantan Tengah", kota: "Kapuas" },
    { propinsi: "Kalimantan Barat", kota: "Kapuas Hulu" },
    { propinsi: "Jawa Tengah", kota: "Karanganyar" },
    { propinsi: "Bali", kota: "Karangasem" },
    { propinsi: "Jawa Barat", kota: "Karawang" },
    { propinsi: "Kepulauan Riau", kota: "Karimun" },
    { propinsi: "Sumatera Utara", kota: "Karo" },
    { propinsi: "Kalimantan Tengah", kota: "Katingan" },
    { propinsi: "Bengkulu", kota: "Kaur" },
    { propinsi: "Kalimantan Barat", kota: "Kayong Utara" },
    { propinsi: "Jawa Tengah", kota: "Kebumen" },
    { propinsi: "Jawa Timur", kota: "Kediri" },
    { propinsi: "Jawa Timur", kota: "Kediri" },
    { propinsi: "Papua", kota: "Keerom" },
    { propinsi: "Jawa Tengah", kota: "Kendal" },
    { propinsi: "Sulawesi Tenggara", kota: "Kendari" },
    { propinsi: "Bengkulu", kota: "Kepahiang" },
    { propinsi: "Kepulauan Riau", kota: "Kepulauan Anambas" },
    { propinsi: "Maluku", kota: "Kepulauan Aru" },
    { propinsi: "Sumatera Barat", kota: "Kepulauan Mentawai" },
    { propinsi: "Riau", kota: "Kepulauan Meranti" },
    { propinsi: "Sulawesi Utara", kota: "Kepulauan Sangihe" },
    { propinsi: "DKI Jakarta", kota: "Kepulauan Seribu" },
    {
      propinsi: "Sulawesi Utara",
      kota: "Kepulauan Siau Tagulandang Biaro (Sitaro)",
    },
    { propinsi: "Maluku Utara", kota: "Kepulauan Sula" },
    { propinsi: "Sulawesi Utara", kota: "Kepulauan Talaud" },
    { propinsi: "Papua", kota: "Kepulauan Yapen (Yapen Waropen)" },
    { propinsi: "Jambi", kota: "Kerinci" },
    { propinsi: "Kalimantan Barat", kota: "Ketapang" },
    { propinsi: "Jawa Tengah", kota: "Klaten" },
    { propinsi: "Bali", kota: "Klungkung" },
    { propinsi: "Sulawesi Tenggara", kota: "Kolaka" },
    { propinsi: "Sulawesi Tenggara", kota: "Kolaka Utara" },
    { propinsi: "Sulawesi Tenggara", kota: "Konawe" },
    { propinsi: "Sulawesi Tenggara", kota: "Konawe Selatan" },
    { propinsi: "Sulawesi Tenggara", kota: "Konawe Utara" },
    { propinsi: "Kalimantan Selatan", kota: "Kotabaru" },
    { propinsi: "Sulawesi Utara", kota: "Kotamobagu" },
    { propinsi: "Kalimantan Tengah", kota: "Kotawaringin Barat" },
    { propinsi: "Kalimantan Tengah", kota: "Kotawaringin Timur" },
    { propinsi: "Riau", kota: "Kuantan Singingi" },
    { propinsi: "Kalimantan Barat", kota: "Kubu Raya" },
    { propinsi: "Jawa Tengah", kota: "Kudus" },
    { propinsi: "DI Yogyakarta", kota: "Kulon Progo" },
    { propinsi: "Jawa Barat", kota: "Kuningan" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Kupang" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Kupang" },
    { propinsi: "Kalimantan Timur", kota: "Kutai Barat" },
    { propinsi: "Kalimantan Timur", kota: "Kutai Kartanegara" },
    { propinsi: "Kalimantan Timur", kota: "Kutai Timur" },
    { propinsi: "Sumatera Utara", kota: "Labuhan Batu" },
    { propinsi: "Sumatera Utara", kota: "Labuhan Batu Selatan" },
    { propinsi: "Sumatera Utara", kota: "Labuhan Batu Utara" },
    { propinsi: "Sumatera Selatan", kota: "Lahat" },
    { propinsi: "Kalimantan Tengah", kota: "Lamandau" },
    { propinsi: "Jawa Timur", kota: "Lamongan" },
    { propinsi: "Lampung", kota: "Lampung Barat" },
    { propinsi: "Lampung", kota: "Lampung Selatan" },
    { propinsi: "Lampung", kota: "Lampung Tengah" },
    { propinsi: "Lampung", kota: "Lampung Timur" },
    { propinsi: "Lampung", kota: "Lampung Utara" },
    { propinsi: "Kalimantan Barat", kota: "Landak" },
    { propinsi: "Sumatera Utara", kota: "Langkat" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Langsa" },
    { propinsi: "Papua", kota: "Lanny Jaya" },
    { propinsi: "Banten", kota: "Lebak" },
    { propinsi: "Bengkulu", kota: "Lebong" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Lembata" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Lhokseumawe" },
    { propinsi: "Sumatera Barat", kota: "Lima Puluh Koto/Kota" },
    { propinsi: "Kepulauan Riau", kota: "Lingga" },
    { propinsi: "Nusa Tenggara Barat (NTB)", kota: "Lombok Barat" },
    { propinsi: "Nusa Tenggara Barat (NTB)", kota: "Lombok Tengah" },
    { propinsi: "Nusa Tenggara Barat (NTB)", kota: "Lombok Timur" },
    { propinsi: "Nusa Tenggara Barat (NTB)", kota: "Lombok Utara" },
    { propinsi: "Sumatera Selatan", kota: "Lubuk Linggau" },
    { propinsi: "Jawa Timur", kota: "Lumajang" },
    { propinsi: "Sulawesi Selatan", kota: "Luwu" },
    { propinsi: "Sulawesi Selatan", kota: "Luwu Timur" },
    { propinsi: "Sulawesi Selatan", kota: "Luwu Utara" },
    { propinsi: "Jawa Timur", kota: "Madiun" },
    { propinsi: "Jawa Timur", kota: "Madiun" },
    { propinsi: "Jawa Tengah", kota: "Magelang" },
    { propinsi: "Jawa Tengah", kota: "Magelang" },
    { propinsi: "Jawa Timur", kota: "Magetan" },
    { propinsi: "Jawa Barat", kota: "Majalengka" },
    { propinsi: "Sulawesi Barat", kota: "Majene" },
    { propinsi: "Sulawesi Selatan", kota: "Makassar" },
    { propinsi: "Jawa Timur", kota: "Malang" },
    { propinsi: "Jawa Timur", kota: "Malang" },
    { propinsi: "Kalimantan Utara", kota: "Malinau" },
    { propinsi: "Maluku", kota: "Maluku Barat Daya" },
    { propinsi: "Maluku", kota: "Maluku Tengah" },
    { propinsi: "Maluku", kota: "Maluku Tenggara" },
    { propinsi: "Maluku", kota: "Maluku Tenggara Barat" },
    { propinsi: "Sulawesi Barat", kota: "Mamasa" },
    { propinsi: "Papua", kota: "Mamberamo Raya" },
    { propinsi: "Papua", kota: "Mamberamo Tengah" },
    { propinsi: "Sulawesi Barat", kota: "Mamuju" },
    { propinsi: "Sulawesi Barat", kota: "Mamuju Utara" },
    { propinsi: "Sulawesi Utara", kota: "Manado" },
    { propinsi: "Sumatera Utara", kota: "Mandailing Natal" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Manggarai" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Manggarai Barat" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Manggarai Timur" },
    { propinsi: "Papua Barat", kota: "Manokwari" },
    { propinsi: "Papua Barat", kota: "Manokwari Selatan" },
    { propinsi: "Papua", kota: "Mappi" },
    { propinsi: "Sulawesi Selatan", kota: "Maros" },
    { propinsi: "Nusa Tenggara Barat (NTB)", kota: "Mataram" },
    { propinsi: "Papua Barat", kota: "Maybrat" },
    { propinsi: "Sumatera Utara", kota: "Medan" },
    { propinsi: "Kalimantan Barat", kota: "Melawi" },
    { propinsi: "Jambi", kota: "Merangin" },
    { propinsi: "Papua", kota: "Merauke" },
    { propinsi: "Lampung", kota: "Mesuji" },
    { propinsi: "Lampung", kota: "Metro" },
    { propinsi: "Papua", kota: "Mimika" },
    { propinsi: "Sulawesi Utara", kota: "Minahasa" },
    { propinsi: "Sulawesi Utara", kota: "Minahasa Selatan" },
    { propinsi: "Sulawesi Utara", kota: "Minahasa Tenggara" },
    { propinsi: "Sulawesi Utara", kota: "Minahasa Utara" },
    { propinsi: "Jawa Timur", kota: "Mojokerto" },
    { propinsi: "Jawa Timur", kota: "Mojokerto" },
    { propinsi: "Sulawesi Tengah", kota: "Morowali" },
    { propinsi: "Sumatera Selatan", kota: "Muara Enim" },
    { propinsi: "Jambi", kota: "Muaro Jambi" },
    { propinsi: "Bengkulu", kota: "Muko Muko" },
    { propinsi: "Sulawesi Tenggara", kota: "Muna" },
    { propinsi: "Kalimantan Tengah", kota: "Murung Raya" },
    { propinsi: "Sumatera Selatan", kota: "Musi Banyuasin" },
    { propinsi: "Sumatera Selatan", kota: "Musi Rawas" },
    { propinsi: "Papua", kota: "Nabire" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Nagan Raya" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Nagekeo" },
    { propinsi: "Kepulauan Riau", kota: "Natuna" },
    { propinsi: "Papua", kota: "Nduga" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Ngada" },
    { propinsi: "Jawa Timur", kota: "Nganjuk" },
    { propinsi: "Jawa Timur", kota: "Ngawi" },
    { propinsi: "Sumatera Utara", kota: "Nias" },
    { propinsi: "Sumatera Utara", kota: "Nias Barat" },
    { propinsi: "Sumatera Utara", kota: "Nias Selatan" },
    { propinsi: "Sumatera Utara", kota: "Nias Utara" },
    { propinsi: "Kalimantan Utara", kota: "Nunukan" },
    { propinsi: "Sumatera Selatan", kota: "Ogan Ilir" },
    { propinsi: "Sumatera Selatan", kota: "Ogan Komering Ilir" },
    { propinsi: "Sumatera Selatan", kota: "Ogan Komering Ulu" },
    { propinsi: "Sumatera Selatan", kota: "Ogan Komering Ulu Selatan" },
    { propinsi: "Sumatera Selatan", kota: "Ogan Komering Ulu Timur" },
    { propinsi: "Jawa Timur", kota: "Pacitan" },
    { propinsi: "Sumatera Barat", kota: "Padang" },
    { propinsi: "Sumatera Utara", kota: "Padang Lawas" },
    { propinsi: "Sumatera Utara", kota: "Padang Lawas Utara" },
    { propinsi: "Sumatera Barat", kota: "Padang Panjang" },
    { propinsi: "Sumatera Barat", kota: "Padang Pariaman" },
    { propinsi: "Sumatera Utara", kota: "Padang Sidempuan" },
    { propinsi: "Sumatera Selatan", kota: "Pagar Alam" },
    { propinsi: "Sumatera Utara", kota: "Pakpak Bharat" },
    { propinsi: "Kalimantan Tengah", kota: "Palangka Raya" },
    { propinsi: "Sumatera Selatan", kota: "Palembang" },
    { propinsi: "Sulawesi Selatan", kota: "Palopo" },
    { propinsi: "Sulawesi Tengah", kota: "Palu" },
    { propinsi: "Jawa Timur", kota: "Pamekasan" },
    { propinsi: "Banten", kota: "Pandeglang" },
    { propinsi: "Jawa Barat", kota: "Pangandaran" },
    { propinsi: "Sulawesi Selatan", kota: "Pangkajene Kepulauan" },
    { propinsi: "Bangka Belitung", kota: "Pangkal Pinang" },
    { propinsi: "Papua", kota: "Paniai" },
    { propinsi: "Sulawesi Selatan", kota: "Parepare" },
    { propinsi: "Sumatera Barat", kota: "Pariaman" },
    { propinsi: "Sulawesi Tengah", kota: "Parigi Moutong" },
    { propinsi: "Sumatera Barat", kota: "Pasaman" },
    { propinsi: "Sumatera Barat", kota: "Pasaman Barat" },
    { propinsi: "Kalimantan Timur", kota: "Paser" },
    { propinsi: "Jawa Timur", kota: "Pasuruan" },
    { propinsi: "Jawa Timur", kota: "Pasuruan" },
    { propinsi: "Jawa Tengah", kota: "Pati" },
    { propinsi: "Sumatera Barat", kota: "Payakumbuh" },
    { propinsi: "Papua Barat", kota: "Pegunungan Arfak" },
    { propinsi: "Papua", kota: "Pegunungan Bintang" },
    { propinsi: "Jawa Tengah", kota: "Pekalongan" },
    { propinsi: "Jawa Tengah", kota: "Pekalongan" },
    { propinsi: "Riau", kota: "Pekanbaru" },
    { propinsi: "Riau", kota: "Pelalawan" },
    { propinsi: "Jawa Tengah", kota: "Pemalang" },
    { propinsi: "Sumatera Utara", kota: "Pematang Siantar" },
    { propinsi: "Kalimantan Timur", kota: "Penajam Paser Utara" },
    { propinsi: "Lampung", kota: "Pesawaran" },
    { propinsi: "Lampung", kota: "Pesisir Barat" },
    { propinsi: "Sumatera Barat", kota: "Pesisir Selatan" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Pidie" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Pidie Jaya" },
    { propinsi: "Sulawesi Selatan", kota: "Pinrang" },
    { propinsi: "Gorontalo", kota: "Pohuwato" },
    { propinsi: "Sulawesi Barat", kota: "Polewali Mandar" },
    { propinsi: "Jawa Timur", kota: "Ponorogo" },
    { propinsi: "Kalimantan Barat", kota: "Pontianak" },
    { propinsi: "Kalimantan Barat", kota: "Pontianak" },
    { propinsi: "Sulawesi Tengah", kota: "Poso" },
    { propinsi: "Sumatera Selatan", kota: "Prabumulih" },
    { propinsi: "Lampung", kota: "Pringsewu" },
    { propinsi: "Jawa Timur", kota: "Probolinggo" },
    { propinsi: "Jawa Timur", kota: "Probolinggo" },
    { propinsi: "Kalimantan Tengah", kota: "Pulang Pisau" },
    { propinsi: "Maluku Utara", kota: "Pulau Morotai" },
    { propinsi: "Papua", kota: "Puncak" },
    { propinsi: "Papua", kota: "Puncak Jaya" },
    { propinsi: "Jawa Tengah", kota: "Purbalingga" },
    { propinsi: "Jawa Barat", kota: "Purwakarta" },
    { propinsi: "Jawa Tengah", kota: "Purworejo" },
    { propinsi: "Papua Barat", kota: "Raja Ampat" },
    { propinsi: "Bengkulu", kota: "Rejang Lebong" },
    { propinsi: "Jawa Tengah", kota: "Rembang" },
    { propinsi: "Riau", kota: "Rokan Hilir" },
    { propinsi: "Riau", kota: "Rokan Hulu" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Rote Ndao" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Sabang" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Sabu Raijua" },
    { propinsi: "Jawa Tengah", kota: "Salatiga" },
    { propinsi: "Kalimantan Timur", kota: "Samarinda" },
    { propinsi: "Kalimantan Barat", kota: "Sambas" },
    { propinsi: "Sumatera Utara", kota: "Samosir" },
    { propinsi: "Jawa Timur", kota: "Sampang" },
    { propinsi: "Kalimantan Barat", kota: "Sanggau" },
    { propinsi: "Papua", kota: "Sarmi" },
    { propinsi: "Jambi", kota: "Sarolangun" },
    { propinsi: "Sumatera Barat", kota: "Sawah Lunto" },
    { propinsi: "Kalimantan Barat", kota: "Sekadau" },
    { propinsi: "Sulawesi Selatan", kota: "Selayar (Kepulauan Selayar)" },
    { propinsi: "Bengkulu", kota: "Seluma" },
    { propinsi: "Jawa Tengah", kota: "Semarang" },
    { propinsi: "Jawa Tengah", kota: "Semarang" },
    { propinsi: "Maluku", kota: "Seram Bagian Barat" },
    { propinsi: "Maluku", kota: "Seram Bagian Timur" },
    { propinsi: "Banten", kota: "Serang" },
    { propinsi: "Banten", kota: "Serang" },
    { propinsi: "Sumatera Utara", kota: "Serdang Bedagai" },
    { propinsi: "Kalimantan Tengah", kota: "Seruyan" },
    { propinsi: "Riau", kota: "Siak" },
    { propinsi: "Sumatera Utara", kota: "Sibolga" },
    { propinsi: "Sulawesi Selatan", kota: "Sidenreng Rappang/Rapang" },
    { propinsi: "Jawa Timur", kota: "Sidoarjo" },
    { propinsi: "Sulawesi Tengah", kota: "Sigi" },
    { propinsi: "Sumatera Barat", kota: "Sijunjung (Sawah Lunto Sijunjung)" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Sikka" },
    { propinsi: "Sumatera Utara", kota: "Simalungun" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Simeulue" },
    { propinsi: "Kalimantan Barat", kota: "Singkawang" },
    { propinsi: "Sulawesi Selatan", kota: "Sinjai" },
    { propinsi: "Kalimantan Barat", kota: "Sintang" },
    { propinsi: "Jawa Timur", kota: "Situbondo" },
    { propinsi: "DI Yogyakarta", kota: "Sleman" },
    { propinsi: "Sumatera Barat", kota: "Solok" },
    { propinsi: "Sumatera Barat", kota: "Solok" },
    { propinsi: "Sumatera Barat", kota: "Solok Selatan" },
    { propinsi: "Sulawesi Selatan", kota: "Soppeng" },
    { propinsi: "Papua Barat", kota: "Sorong" },
    { propinsi: "Papua Barat", kota: "Sorong" },
    { propinsi: "Papua Barat", kota: "Sorong Selatan" },
    { propinsi: "Jawa Tengah", kota: "Sragen" },
    { propinsi: "Jawa Barat", kota: "Subang" },
    { propinsi: "Nanggroe Aceh Darussalam (NAD)", kota: "Subulussalam" },
    { propinsi: "Jawa Barat", kota: "Sukabumi" },
    { propinsi: "Jawa Barat", kota: "Sukabumi" },
    { propinsi: "Kalimantan Tengah", kota: "Sukamara" },
    { propinsi: "Jawa Tengah", kota: "Sukoharjo" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Sumba Barat" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Sumba Barat Daya" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Sumba Tengah" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Sumba Timur" },
    { propinsi: "Nusa Tenggara Barat (NTB)", kota: "Sumbawa" },
    { propinsi: "Nusa Tenggara Barat (NTB)", kota: "Sumbawa Barat" },
    { propinsi: "Jawa Barat", kota: "Sumedang" },
    { propinsi: "Jawa Timur", kota: "Sumenep" },
    { propinsi: "Jambi", kota: "Sungaipenuh" },
    { propinsi: "Papua", kota: "Supiori" },
    { propinsi: "Jawa Timur", kota: "Surabaya" },
    { propinsi: "Jawa Tengah", kota: "Surakarta (Solo)" },
    { propinsi: "Kalimantan Selatan", kota: "Tabalong" },
    { propinsi: "Bali", kota: "Tabanan" },
    { propinsi: "Sulawesi Selatan", kota: "Takalar" },
    { propinsi: "Papua Barat", kota: "Tambrauw" },
    { propinsi: "Kalimantan Utara", kota: "Tana Tidung" },
    { propinsi: "Sulawesi Selatan", kota: "Tana Toraja" },
    { propinsi: "Kalimantan Selatan", kota: "Tanah Bumbu" },
    { propinsi: "Sumatera Barat", kota: "Tanah Datar" },
    { propinsi: "Kalimantan Selatan", kota: "Tanah Laut" },
    { propinsi: "Banten", kota: "Tangerang" },
    { propinsi: "Banten", kota: "Tangerang" },
    { propinsi: "Banten", kota: "Tangerang Selatan" },
    { propinsi: "Lampung", kota: "Tanggamus" },
    { propinsi: "Sumatera Utara", kota: "Tanjung Balai" },
    { propinsi: "Jambi", kota: "Tanjung Jabung Barat" },
    { propinsi: "Jambi", kota: "Tanjung Jabung Timur" },
    { propinsi: "Kepulauan Riau", kota: "Tanjung Pinang" },
    { propinsi: "Sumatera Utara", kota: "Tapanuli Selatan" },
    { propinsi: "Sumatera Utara", kota: "Tapanuli Tengah" },
    { propinsi: "Sumatera Utara", kota: "Tapanuli Utara" },
    { propinsi: "Kalimantan Selatan", kota: "Tapin" },
    { propinsi: "Kalimantan Utara", kota: "Tarakan" },
    { propinsi: "Jawa Barat", kota: "Tasikmalaya" },
    { propinsi: "Jawa Barat", kota: "Tasikmalaya" },
    { propinsi: "Sumatera Utara", kota: "Tebing Tinggi" },
    { propinsi: "Jambi", kota: "Tebo" },
    { propinsi: "Jawa Tengah", kota: "Tegal" },
    { propinsi: "Jawa Tengah", kota: "Tegal" },
    { propinsi: "Papua Barat", kota: "Teluk Bintuni" },
    { propinsi: "Papua Barat", kota: "Teluk Wondama" },
    { propinsi: "Jawa Tengah", kota: "Temanggung" },
    { propinsi: "Maluku Utara", kota: "Ternate" },
    { propinsi: "Maluku Utara", kota: "Tidore Kepulauan" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Timor Tengah Selatan" },
    { propinsi: "Nusa Tenggara Timur (NTT)", kota: "Timor Tengah Utara" },
    { propinsi: "Sumatera Utara", kota: "Toba Samosir" },
    { propinsi: "Sulawesi Tengah", kota: "Tojo Una-Una" },
    { propinsi: "Sulawesi Tengah", kota: "Toli-Toli" },
    { propinsi: "Papua", kota: "Tolikara" },
    { propinsi: "Sulawesi Utara", kota: "Tomohon" },
    { propinsi: "Sulawesi Selatan", kota: "Toraja Utara" },
    { propinsi: "Jawa Timur", kota: "Trenggalek" },
    { propinsi: "Maluku", kota: "Tual" },
    { propinsi: "Jawa Timur", kota: "Tuban" },
    { propinsi: "Lampung", kota: "Tulang Bawang" },
    { propinsi: "Lampung", kota: "Tulang Bawang Barat" },
    { propinsi: "Jawa Timur", kota: "Tulungagung" },
    { propinsi: "Sulawesi Selatan", kota: "Wajo" },
    { propinsi: "Sulawesi Tenggara", kota: "Wakatobi" },
    { propinsi: "Papua", kota: "Waropen" },
    { propinsi: "Lampung", kota: "Way Kanan" },
    { propinsi: "Jawa Tengah", kota: "Wonogiri" },
    { propinsi: "Jawa Tengah", kota: "Wonosobo" },
    { propinsi: "Papua", kota: "Yahukimo" },
    { propinsi: "Papua", kota: "Yalimo" },
    { propinsi: "DI Yogyakarta", kota: "Yogyakarta" },
  ]);

  // const [kota,setKota] = useState(
  const [simposiumprice, setSimposiumprice] = useState([
    { profession: "Medical Student", price: "IDR 10,000" },
    { profession: "GP", price: "IDR 300,000" },
    { profession: "Cardiologist", price: "IDR 500,000" },
    { profession: "Other Specialist", price: "IDR 500,000" },
    { profession: "Nurse or Paramedics", price: "IDR 150,000" },
  ]);

  const [hargapaket, setHargapaket] = useState([
    // {profession:"Cardiologist",package:"-",price:"0"},
    {
      profession: "Cardiologist",
      package: "Silver (Symposium+2 workshop*)",
      price: "IDR 1,200,000",
      jumlah: 2,
    },
    {
      profession: "Cardiologist",
      package: "Gold (Symposium+4 workshop*)",
      price: "IDR 1,800,000",
      jumlah: 4,
    },
    {
      profession: "Cardiologist",
      package: "Platinum (Symposium+6 workshop*)",
      price: "IDR 2,300,000",
      jumlah: 6,
    },
    // {profession:"Other specialists",package:"-",price:"0"},
    {
      profession: "Other Specialist",
      package: "Silver (Symposium+2 workshop*)",
      price: "IDR 1,200,000",
      jumlah: 2,
    },
    {
      profession: "Other Specialist",
      package: "Gold (Symposium+4 workshop*)",
      price: "IDR 1,800,000",
      jumlah: 4,
    },
    {
      profession: "Other Specialist",
      package: "Platinum (Symposium+6 workshop*)",
      price: "IDR 2,300,000",
      jumlah: 6,
    },
    // {profession:"GP",package:"-",price:"0"},
    {
      profession: "GP",
      package: "Silver (Symposium+2 workshop*)",
      price: "IDR 550,000",
      jumlah: 2,
    },
    {
      profession: "GP",
      package: "Gold (Symposium+4 workshop*)",
      price: "IDR 700,000",
      jumlah: 4,
    },
    {
      profession: "GP",
      package: "Platinum (Symposium+6 workshop*)",
      price: "IDR 850,000",
      jumlah: 6,
    },
    // {profession:"Medical Student",package:"-",price:"0"},
    {
      profession: "Medical Student",
      package: "Silver (Symposium+2 workshop*)",
      price: "IDR 250,000",
      jumlah: 2,
    },
    {
      profession: "Medical Student",
      package: "Gold (Symposium+4 workshop*)",
      price: "IDR 300,000",
      jumlah: 4,
    },
    {
      profession: "Medical Student",
      package: "Platinum (Symposium+6 workshop*)",
      price: "IDR 350,000",
      jumlah: 6,
    },
    // {profession:"Nurse or Paramedics",package:"-",price:"0"},
    {
      profession: "Nurse or Paramedics",
      package: "Silver (Symposium+2 workshop*)",
      price: "IDR 225,000",
      jumlah: 2,
    },
  ]);

  const [workshopprof, setWorkshopprof] = useState([
    {
      profession: "GP",
      name: "WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)",
    },
    {
      profession: "GP",
      name: "WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)",
    },
    {
      profession: "GP",
      name: "WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)",
    },
    { profession: "GP", name: "WS 7 (Comprehensive CV Risk Stratification)" },
    {
      profession: "GP",
      name: "WS 9 (Practical Approach in Emergency Arrythmias)",
    },
    {
      profession: "GP",
      name: "WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskulardi Lini Terdepan: Fokus pada Terapi Trombolitik)",
    },
    {
      profession: "GP",
      name: "WS 11 (Rapid Echocardiography in Emergency Setting)",
    },
    {
      profession: "GP",
      name: "WS 13 (Advanced in Diagnosing Acute Heart Failure)",
    },
    {
      profession: "Cardiologist",
      name: "WS 1 (Pregnancy and Heart Disease: What is the Most Common Cardiovascular Problem on It?)",
    },
    {
      profession: "Cardiologist",
      name: "WS 2 (Perioperative Cardiac Consultation)",
    },
    {
      profession: "Cardiologist",
      name: "WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)",
    },
    {
      profession: "Cardiologist",
      name: "WS 4 (Cardiac Injury in Chemotherapy Patient)",
    },
    {
      profession: "Cardiologist",
      name: "WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)",
    },
    {
      profession: "Cardiologist",
      name: "WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)",
    },
    {
      profession: "Cardiologist",
      name: "WS 7 (Comprehensive CV Risk Stratification)",
    },
    {
      profession: "Cardiologist",
      name: "WS 8 (Practical approach to non-invasive ventilation in acute heart failure)",
    },
    {
      profession: "Cardiologist",
      name: "WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)",
    },
    {
      profession: "Cardiologist",
      name: "WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)",
    },
    {
      profession: "Cardiologist",
      name: "WS 15 (Cardiomyopathy Evaluation by Cardiac MR)",
    },
    {
      profession: "Cardiologist",
      name: "WS 16 (Cardiac CT in Coronary Artery and Beyond)",
    },
    {
      profession: "Cardiologist",
      name: "WS Indovasc 1 (Early Detection of Chronic Venous Insufficiency)",
    },
    { profession: "Cardiologist", name: "WS Indovasc 2 (Vascular Doppler US)" },
    {
      profession: "Cardiologist",
      name: "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)",
    },
    {
      profession: "Other Specialists",
      name: "WS 1 (Pregnancy and Heart Disease: What is the Most Common Cardiovascular Problem on It?)",
    },
    {
      profession: "Other Specialists",
      name: "WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)",
    },
    {
      profession: "Other Specialists",
      name: "WS 4 (Cardiac Injury in Chemotherapy Patient)",
    },
    {
      profession: "Other Specialists",
      name: "WS 7 (Comprehensive CV Risk Stratification)",
    },
    {
      profession: "Other Specialists",
      name: "WS 8 (Practical approach to non-invasive ventilation in acute heart failure)",
    },
    {
      profession: "Other Specialists",
      name: "WS 9 (Practical Approach in Emergency Arrythmias)",
    },
    {
      profession: "Other Specialists",
      name: "WS 11 (Rapid Echocardiography in Emergency Setting)",
    },
    {
      profession: "Other Specialists",
      name: "WS 13 (Advanced in Diagnosing Acute Heart Failure)",
    },
    {
      profession: "Other Specialists",
      name: "WS 15 (Cardiomyopathy Evaluation by Cardiac MR)",
    },
    {
      profession: "Other Specialists",
      name: "WS 16 (Cardiac CT in Coronary Artery and Beyond)",
    },
    {
      profession: "Nurse or Paramedics",
      name: "Ws 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)",
    },
    {
      profession: "Nurse or Paramedics",
      name: "WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskular di Lini Terdepan: Fokus pada Terapi Trombolitik)",
    },
    {
      profession: "Medical Student",
      name: "WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)",
    },
    {
      profession: "Medical Student",
      name: "WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)",
    },
    {
      profession: "Medical Student",
      name: "WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)",
    },
    {
      profession: "Medical Student",
      name: "WS 7 (Comprehensive CV Risk Stratification)",
    },
    {
      profession: "Medical Student",
      name: "WS 9 (Practical Approach in Emergency Arrythmias)",
    },
    {
      profession: "Medical Student",
      name: "WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskulardi Lini Terdepan: Fokus pada Terapi Trombolitik)",
    },
    {
      profession: "Medical Student",
      name: "WS 11 (Rapid Echocardiography in Emergency Setting)",
    },
    {
      profession: "Medical Student",
      name: "WS 13 (Advanced in Diagnosing Acute Heart Failure)",
    },
  ]);

  useEffect(() => {
    var idsponsor = localStorage.getItem("loginid");
    setIdsponsor(idsponsor);
    var anggotast = localStorage.getItem("status");
    if (anggotast == "ANGGOTA") {
      setAnggota(true);
    } else setAnggota(false);
    setNama(localStorage.getItem("nama"));

    var mtd2 = "";
    if (anggotast == "ANGGOTA") {
      mtd2 = "ANGGOTA2";
    } else {
      mtd2 = "ANGGOTA";
    }

    axios({
      url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
      // url: "http://localhost/perki/kirimdata.php",
      data: { mtd: mtd2, idsponsor: idsponsor },
      contentType: "application/json",
      method: "POST",
    })
      .then((data) => {
        // var temp = data.data;
        setAnggota(data.data[0]);
        if (data.data[0].simposium != "") {
          changeDataSympo(1);
        } else {
          if (data.data[0].workshop != "") {
            // setWs(data.data[0].workshop.substr(3,2).trim());
            if (data.data[0].workshop.indexOf("WS 1 ") > -1) {
              setWs("1");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 2 ") > -1) {
              setWs("2");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 3 ") > -1) {
              setWs("3");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 4 ") > -1) {
              setWs("4");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 5 ") > -1) {
              setWs("5");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 6 ") > -1) {
              setWs("6");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 7 ") > -1) {
              setWs("7");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 8 ") > -1) {
              setWs("8");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 9 ") > -1) {
              setWs("9");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 10 ") > -1) {
              setWs("10");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 11 ") > -1) {
              setWs("11");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 12 ") > -1) {
              setWs("12");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 13 ") > -1) {
              setWs("13");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 14 ") > -1) {
              setWs("14");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 15 ") > -1) {
              setWs("15");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 16 ") > -1) {
              setWs("16");
              return;
            }
            if (data.data[0].workshop.indexOf("WS Indovasc 1 ") > -1) {
              setWs("1A");
              return;
            }
            if (data.data[0].workshop.indexOf("WS Indovasc 2 ") > -1) {
              setWs("1B");
              return;
            }
            if (data.data[0].workshop.indexOf("WS Indovasc 3 ") > -1) {
              setWs("1C");
              return;
            }
          }
        }
        setWorkshopku(data.data[0].workshop);
      })
      .catch(() => {
        console.log("Internal server error");
      });
  }, []);

  const handleChange = (value) => {
    console.log(`selected ${value}`);

    setPropinsiselect(value);
    setKotaselect("");
  };

  const handleChange2 = (value) => {
    console.log(`selected ${value}`);

    setKotaselect(value);
  };

  const handleChange3 = (value) => {
    console.log(`selected ${value}`);

    setProfessionselect(value);
    setPackageselect("");
    setMacamworkshop([]);
    setJumlahworkshop(0);
    setJumlahworkshopdipilih(0);
    setPackageselect("");
    setPilih(0);
    setHargatotal(0);
    setHargagrandtotal(0);

    workshopprice
      .filter((ch) => ch.profession === value)
      .map((item) =>
        setHargaworkshop(item.price.replace("IDR ", "").replace(",", ""))
      );
    // setHargaworkshop
  };

  const handleChange4 = (value) => {
    console.log(`selected ${value}`);

    setPackageselect(value);
    setHargatotal(value.split("#")[1]);
    setHargagrandtotal(value.split("#")[1]);
    setJumlahworkshop(value.split("#")[2]);
    console.log(value);
    if (value.substr(0, 1) == "S") {
      setPilih2("packagesilver");
    } else if (value.substr(0, 1) == "G") {
      setPilih2("packagegold");
    } else {
      setPilih2("packageplatinum");
    }
  };

  const handleChange6 = (value) => {
    console.log(`selected ${value}`);

    setHargaservice(value);
    setHargagrandtotal(
      parseInt(value) +
        parseInt(
          hargatotal.replace("IDR ", "").replace(",", "").replace(",", "")
        ) +
        parseInt(hargatambahan)
    );
  };

  const handleChange5 = (value) => {
    console.log(`selected ${value}`);

    // setPackageselect(value);
    // setHargatotal(value.split("#")[1]);
    if (pilih == 4) value = [value];
    console.log("workshop", value);
    setMacamworkshop(value);

    setJumlahworkshopdipilih(value.length);

    if (pilih === 3) {
      if (
        value.indexOf("WS Indovasc 2 (Vascular Doppler US)") > -1 &&
        value.indexOf(
          "WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)"
        ) > -1
      ) {
        alert("Ws 12 and WS Indovac 2 run in same time");
      }
      if (
        value.indexOf("WS Indovasc 2 (Vascular Doppler US)") > -1 &&
        value.indexOf(
          "WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)"
        ) > -1
      ) {
        alert("Ws 14 and WS Indovac 2 run in same time");
      }
      if (
        value.indexOf("WS 15 (Cardiomyopathy Evaluation by Cardiac MR)") > -1 &&
        value.indexOf(
          "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"
        ) > -1
      ) {
        alert("Ws 15 and WS Indovac 3 run in same time");
      }
      if (
        value.indexOf("WS 16 (Cardiac CT in Coronary Artery and Beyond)") >
          -1 &&
        value.indexOf(
          "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"
        ) > -1
      ) {
        alert("Ws 16 and WS Indovac 3 run in same time");
      }
      if (value.length > jumlahworkshop) {
        setHargatambahan((value.length - jumlahworkshop) * hargaworkshop);
        setHargagrandtotal(
          parseInt(
            hargatotal.replace("IDR ", "").replace(",", "").replace(",", "")
          ) +
            (value.length - jumlahworkshop) * hargaworkshop
        );
      } else {
        setHargatambahan(0);
        setHargagrandtotal(
          parseInt(
            hargatotal.replace("IDR ", "").replace(",", "").replace(",", "")
          )
        );
      }
    }

    if (pilih == 2) {
      if (
        value.indexOf("WS Indovasc 2 (Vascular Doppler US)") > -1 &&
        value.indexOf(
          "WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)"
        ) > -1
      ) {
        alert("Ws 12 and WS Indovac 2 run in same time");
      }
      if (
        value.indexOf("WS Indovasc 2 (Vascular Doppler US)") > -1 &&
        value.indexOf(
          "WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)"
        ) > -1
      ) {
        alert("Ws 14 and WS Indovac 2 run in same time");
      }
      if (
        value.indexOf("WS 15 (Cardiomyopathy Evaluation by Cardiac MR)") > -1 &&
        value.indexOf(
          "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"
        ) > -1
      ) {
        alert("Ws 15 and WS Indovac 3 run in same time");
      }
      if (
        value.indexOf("WS 16 (Cardiac CT in Coronary Artery and Beyond)") >
          -1 &&
        value.indexOf(
          "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"
        ) > -1
      ) {
        alert("Ws 16 and WS Indovac 3 run in same time");
      }
      setHargatotal(value.length * hargaworkshop);
      setHargagrandtotal(value.length * hargaworkshop);
    }

    // setHargatotal
  };

  const onSearch = (value) => {
    console.log(value);
    if (value == "") {
      alert("Silakan isi kode promo");
      return;
    }

    const payload = {
      kode: value,
      mtd: "CEK",
    };
    axios({
      url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
      // url: "http://localhost/perki/kirimdata.php",
      data: payload,
      contentType: "application/json",
      method: "POST",
    })
      .then((data) => {
        var temp = data.data;
        console.log(temp);
        if (temp.sukses == "OK") {
          alert("Promo valid diskon Rp100,000");
          setHargapromo(100000);
          setHargagrandtotal(hargagrandtotal - 100000);
        } else {
          alert("Promo tidak valid");
        }
      })
      .catch(() => {
        console.log("Internal server error");
      });
  };

  const simpan = () => {
    // axios.get(`https://primavisiglobalindo.net/demo/conference1/wp-content/plugins/perki/test.php`)
    //     .then(res => {
    //       const persons = res.data;
    //       // this.setState({ persons });
    //       console.log(persons);
    //     })
    const pwd = generator.generate({
      length: 10,
      lowercase: false,
      uppercase: true,
      numbers: true,
      symbols: false,
    });
    if (
      macamworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)") > -1 &&
      macamworkshop.indexOf(
        "WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)"
      ) > -1
    ) {
      alert("Ws 12 and WS Indovac 2 run in same time");
      return;
    }
    if (
      macamworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)") > -1 &&
      macamworkshop.indexOf(
        "WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)"
      ) > -1
    ) {
      alert("Ws 14 and WS Indovac 2 run in same time");
      return;
    }
    if (
      macamworkshop.indexOf("WS 15 (Cardiomyopathy Evaluation by Cardiac MR)") >
        -1 &&
      macamworkshop.indexOf(
        "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"
      ) > -1
    ) {
      alert("Ws 15 and WS Indovac 3 run in same time");
      return;
    }
    if (
      macamworkshop.indexOf(
        "WS 16 (Cardiac CT in Coronary Artery and Beyond)"
      ) > -1 &&
      macamworkshop.indexOf(
        "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"
      ) > -1
    ) {
      alert("Ws 16 and WS Indovac 3 run in same time");
      return;
    }
    setDisable(true);
    var idsponsor = localStorage.getItem("loginid");
    console.log("masuk sini simpan", macamworkshop);
    var simposium2 = "";
    if (pilih === 1 || pilih === 3 || pilih === 4) simposium2 = simposium;

    axios({
      method: "POST",
      url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
      // url: "http://localhost/perki/kirimdata.php",
      data: {
        firstname: myform.firstname,
        lastname: myform.lastname,
        profession: professionselect,
        fullnamecert: myform.fullname,
        gender: myform.gender,
        placedob: myform.pob,
        address: "",
        country: myform.county,
        province: myform.province,
        city: myform.city,
        email: myform.email,
        password: pwd,
        mobilephone: myform.mobile,
        affiliation: myform.affliliation,
        officemobilephone: myform.officeph,
        simposium: simposium,
        workshopprice: hargaworkshop,
        package: packageselect,
        workshop: macamworkshop,
        payment: "Mid Trans",
        promocode: myform.promocode,
        total: hargagrandtotal,
        mtd: "ADDANGGOTA",
        idsponsor: idsponsor,
        pilih: pilih2,
      },
      contentType: "application/json",
    })
      .then((data) => {
        console.log(data);
        Modal.info({
          title: "This is a notification message",
          content: (
            <div>
              <p>{"Data sudah tersimpan"}</p>
            </div>
          ),
          onOk() {
            history.push("/theme/sponsor");
            // history.push('https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/sponsor');

            // /demo/conference1/wp-content/plugins/perki/build/#/theme/perki
          },
        });
      })
      .catch(() => {
        console.log("Internal server error");
      });

    //  axios({
    //   url: 'http://127.0.0.1:8080/api/saveorderstatus',
    //   method: 'POST',
    //   data: payload
    // })
    //   .then((data) => {
    //     // postList: this.state.postList.filter(item => item.post_id != deletePostId)
    //     console.log(idmerchant);
    //     console.log("================================");
    //     loadstatus(idmerchant);
    //     // window.location.reload();
    //     // var data2 = datas.filter(item => item._id != data.data._id);
    //     // setDatas(data2);
    //     // setDatas();
    //     // console.log(datas);
    //     // loadkategori();
    //     // setDatas([data.data,...datas]);
    //     // history.push('/kategori');
    //     // useEffect2();
    //   })
    //   .catch(() => {
    //     console.log('Internal server error');
    //   });
  };

  const WacthZoom = (meetingId, passcode = null) => {
    console.log(meetingId, passcode);
    localStorage.setItem("meetingid", meetingId);
    localStorage.setItem("passcode", passcode);
    history.push("/theme/zoom");
  };

  const handleKlik = (value) => {
    console.log(`selected ${value}`);
  };

  const klikStep1 = () => {
    var emptytext = "";
    console.log(step);
    if (step == "Step1") {
      if (myform.fullname === "") emptytext = emptytext + "full name,";
      if (myform.gender === "") emptytext = emptytext + "gender,";
      if (myform.address === "") emptytext = emptytext + "address,";
      if (myform.email === "") emptytext = emptytext + "email,";
      if (myform.emailconfirm === "") emptytext = emptytext + "email confirm,";
      // if (myform.password==="") emptytext=emptytext+"password,";
      // if (myform.passwordconfirm==="") emptytext=emptytext+"password confirm,";
      if (myform.mobile === "") emptytext = emptytext + "mobile,";
      if (myform.affliliation === "") emptytext = emptytext + "affiliation,";

      if (emptytext.length > 0) {
        Modal.info({
          title: "This is a notification message",
          content: (
            <div>
              <p>{"Silakan " + emptytext + " diisi dulu"}</p>
            </div>
          ),
          onOk() {},
        });
        return;
      }
      const payload = {
        email: myform.email,
        mtd: "CEKEMAIL",
      };
      axios({
        url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
        // url: "http://localhost/perki/kirimdata.php",
        data: payload,
        contentType: "application/json",
        method: "POST",
      })
        .then((data) => {
          var temp = data.data;
          console.log(temp);
          if (temp.sukses == "OK") {
            alert("Email sudah digunakan");
            return;
          } else {
            setStep("Step2");
            return;
          }
        })
        .catch(() => {
          console.log("Internal server error");
        });
    } // }

    if (step == "Step2") {
      if (jumlahworkshop > jumlahworkshopdipilih) {
        alert("You must select more workshop");
        return;
      }
      if (
        macamworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)") > -1 &&
        macamworkshop.indexOf(
          "WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)"
        ) > -1
      ) {
        alert("Ws 12 and WS Indovac 2 run in same time");
        return;
      }
      if (
        macamworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)") > -1 &&
        macamworkshop.indexOf(
          "WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)"
        ) > -1
      ) {
        alert("Ws 14 and WS Indovac 2 run in same time");
        return;
      }
      if (
        macamworkshop.indexOf(
          "WS 15 (Cardiomyopathy Evaluation by Cardiac MR)"
        ) > -1 &&
        macamworkshop.indexOf(
          "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"
        ) > -1
      ) {
        alert("Ws 15 and WS Indovac 3 run in same time");
        return;
      }
      if (
        macamworkshop.indexOf(
          "WS 16 (Cardiac CT in Coronary Artery and Beyond)"
        ) > -1 &&
        macamworkshop.indexOf(
          "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"
        ) > -1
      ) {
        alert("Ws 16 and WS Indovac 3 run in same time");
        return;
      }
      simpan();
      // setStep("Step3");return;
      window.scrollTo(0, 0);
    }
  };

  const pilihanku = (value) => {
    console.log(professionselect);
    console.log("pilih", value);
    if (value === 1) {
      simposiumprice
        .filter((ch) => ch.profession === professionselect)
        .map((item) =>
          // setHargatotal(item.price)
          //  console.log("price",item.price)
          {
            setHargatotal(item.price.replace("IDR ", "").replace(",", ""));
            setHargagrandtotal(item.price.replace("IDR ", "").replace(",", ""));
          }
        );
      setMacamworkshop([]);
      setJumlahworkshop(0);
      setJumlahworkshopdipilih(0);
      setPackageselect("");

      // simposiumprice.filter()
    }
    if (value === 2) {
      setPackageselect("");
    }

    if (value === 4) {
      var hargasimpo = 0;
      var hargaws = 0;
      simposiumprice
        .filter((ch) => ch.profession === professionselect)
        .map((item) => {
          hargasimpo = parseInt(
            item.price.replace("IDR ", "").replace(",", "")
          );
        });
      workshopprice
        .filter((ch) => ch.profession === professionselect)
        .map((item) => {
          hargaws = parseInt(item.price.replace("IDR ", "").replace(",", ""));
        });

      setPackageselect("");
      setHargatotal(hargasimpo + hargaws);
      setHargagrandtotal(hargasimpo + hargaws);
    }

    // if (value===2) {
    //   workshopprice.filter(ch => ch.profession === professionselect).map((item) =>
    //    // setHargatotal(item.price)
    //    console.log("price",item.price)
    //   //  setHargatotal(item.price.replace("IDR ","").replace(",",""))
    //    );

    //   // simposiumprice.filter()
    // }
    setPilih(value);
    if (value == "1") {
      setPilih2("simposium");
    } else if (value == 2) {
      setPilih2("workshop");
    } else if (value == 3) {
      setPilih2("package");
    } else {
      setPilih2("seminar,workshop");
    }
    //  setPilih2(value);
  };

  const changeDataWS = (noUrut) => {
    setVisible(!visible);
    axios
      .get(
        "https://acsasurabaya2021.com/wp-content/plugins/perki/PerkiAPi.php?function=getwsdetil&noUrut=" +
          noUrut
      )
      .then((res) => {
        // console.log(res);
        setVisible(!visible);
        if (
          res.data.status == 0 &&
          res.data.master == null &&
          res.data.master == []
        ) {
          alert("Mohon Hubungi Admin");
        } else {
          setDataWs(res.data);
          setWs("ws");
        }
      })
      .catch((err) => console.log(err));
  };

  const changeDataSympo = (noUrut) => {
    setVisible(!visible);
    axios
      .get(
        "https://acsasurabaya2021.com/wp-content/plugins/perki/PerkiAPi.php?function=getsympodetil&noUrut=" +
          noUrut
      )
      .then((res) => {
        console.log(res);
        setVisible(!visible);
        if (
          res.data.status == 0 &&
          res.data.master == null &&
          res.data.master == []
        ) {
          alert("Mohon Hubungi Admin");
        } else {
          setDataSympo(res.data);
          setWs("sympo");
          console.log(dataSympo);
        }
      })
      .catch((err) => console.log(err));
  };

  const parseDate = (date) => {
    let isValidDate = Date.parse(date);
    let dateArticle = new Intl.DateTimeFormat("en", { month: "long" });
    if (isNaN(isValidDate)) {
      return "-";
    } else {
      return (
        new Date(date).getDate() +
        " " +
        dateArticle.format(new Date(date)) +
        " " +
        new Date(date).getFullYear()
      );
    }
  };

  return (
    <>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CSpinner color="primary" />
      </CModal>
      <CCard>
        <CCardHeader style={{ fontSize: "25px" }}>
          <span className="badge badge-info">Session</span>
          <img
            src="https://acsasurabaya2021.com/wp-content/plugins/perki/register.png"
            className="visible-desktop"
            width="300"
            style={{
              float: "right",
              position: "relative",
              right: "-20px",
              width: "250px",
            }}
          />
        </CCardHeader>
        <CTabs activeTab="acsa">
          <CNav variant="tabs" style={{ padding: "11px" }}>
            <CNavItem>
              <CNavLink data-tab="acsa" style={{ border: "none" }}>
                ACSA
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink data-tab="indoviscular" style={{ border: "none" }}>
                INDOVISCULAR
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent>
            <CTabPane data-tab="acsa">
              <CCardBody>
                <CRow>
                  <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                    {anggota.simposium != "" ? (
                      <>
                        <Button
                          type="primary"
                          onClick={() => {
                            setWs("PERTAMA");
                            changeDataSympo(1);
                          }}
                          style={{ borderRadius: "10px" }}
                        >
                          Sym 1
                        </Button>
                        <Button
                          type="primary"
                          onClick={() => {
                            setWs("KEDUA");
                            changeDataSympo(2);
                          }}
                          style={{ marginLeft: "2px", borderRadius: "10px" }}
                        >
                          Sym 2
                        </Button>
                        <Button
                          type="primary"
                          onClick={() => {
                            setWs("KETIGA");
                            changeDataSympo(3);
                          }}
                          style={{ marginLeft: "2px", borderRadius: "10px" }}
                        >
                          Sym 3
                        </Button>
                      </>
                    ) : null}
                    {workshopku.indexOf("WS 1 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("1");
                          changeDataWS(1);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 1
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 2 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("2");
                          changeDataWS(2);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 2
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 3 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("3");
                          changeDataWS(3);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 3
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 4 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("4");
                          changeDataWS(4);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 4
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 5 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("5");
                          changeDataWS(5);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 5
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 6 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("6");
                          changeDataWS(6);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 6
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 7 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("7");
                          changeDataWS(7);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 7
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 8 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("8");
                          changeDataWS(8);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 8
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 9 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("9");
                          changeDataWS(7);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 9
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 10 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("10");
                          changeDataWS(10);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 10
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 11 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("11");
                          changeDataWS(10);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 11
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 12 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("12");
                          changeDataWS(12);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 12
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 13 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("13");
                          changeDataWS(13);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 13
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 14 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("14");
                          changeDataWS(14);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 14
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 15 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("15");
                          changeDataWS(15);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 15
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 16 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("16");
                          changeDataWS(16);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 16
                      </Button>
                    ) : null}
                  </div>
                </CRow>
                <CRow
                  style={{ marginTop: "30px" }}
                  className="justify-content-center"
                >
                  {ws == "sympo" ? (
                    <>
                      <h2
                        style={{
                          margin: "0 auto",
                          position: "relative",
                          width: "95%",
                          marginBottom: "25px",
                          color: "#4e4e4e",
                        }}
                      >
                        {`DAY-${dataSympo.master[0].serial_number} : ${
                          dataSympo.master[0].day
                        }, ${parseDate(dataSympo.master[0].date)}`}
                      </h2>
                      {dataSympo.detil.map((s, index1) => {
                        return (
                          <div
                            key={index1}
                            class={`col-lg-${
                              dataSympo.detil.length == 1
                                ? "12"
                                : dataSympo.detil.length > 1 &&
                                  dataSympo.detil.length >= 2
                                ? "6"
                                : dataSympo.detil.length > 2 &&
                                  dataSympo.detil.length <= 3
                                ? "4"
                                : dataSympo.detil.length > 3
                                ? "3"
                                : "12"
                            } col-md-${
                              dataSympo.detil.length == 1
                                ? "12"
                                : dataSympo.detil.length > 1 &&
                                  dataSympo.detil.length <= 3
                                ? "4"
                                : dataSympo.detil.length > 3
                                ? "3"
                                : "12"
                            } col-sm-12 col-xs-12`}
                          >
                            <h4
                              style={{
                                color: "#4e4e4e",
                                margin: "0 auto",
                                position: "relative",
                                width: "95%",
                              }}
                            >{`Ballroom ${index1 + 1}`}</h4>
                            <VerticalTimeline layout="1-column-left">
                              {dataSympo.detil[index1].map((row, index2) => {
                                return (
                                  <VerticalTimelineElement
                                    key={index2}
                                    className="vertical-timeline-element--work"
                                    style={{ margin: "10px 0" }}
                                    contentStyle={{
                                      background: "rgb(33, 150, 243)",
                                      color: "#fff",
                                      textAlign: "center",
                                    }}
                                    contentArrowStyle={{
                                      borderRight:
                                        "7px solid  rgb(33, 150, 243)",
                                    }}
                                    date={row.time_range}
                                    iconStyle={{
                                      background: "rgb(33, 150, 243)",
                                      color: "#fff",
                                    }}
                                    icon={
                                      <i
                                        style={{
                                          position: "relative",
                                          left: "50%",
                                          top: "50%",
                                          transform: "translate(-50%, -50%)",
                                          fontSize: "25px",
                                        }}
                                        class="far fa-calendar-alt"
                                      ></i>
                                    }
                                  >
                                    {row.tipe == "Activity" ? (
                                      <>
                                        <h5 className="text-white vertical-timeline-element-title">
                                          {row.topic}
                                        </h5>
                                        <p>Speaker: {row.speaker ?? "tba"}</p>
                                      </>
                                    ) : (
                                      <>
                                        <h5 className="text-white vertical-timeline-element-title">
                                          {row.topic}
                                        </h5>
                                        <p>
                                          Chairman: {row.chairman ?? "tba"}{" "}
                                          <br /> Panelist:{" "}
                                          {row.panelist ?? "tba"}
                                        </p>
                                        <Button
                                          type="primary"
                                          style={{
                                            borderRadius: "10px",
                                            background: "#2a3d9f",
                                            position: "absolute",
                                            right: "15px",
                                            bottom: "16px",
                                          }}
                                          onClick={() => {
                                            WacthZoom(
                                              row.zoom_room_id,
                                              row.passcode
                                            );
                                          }}
                                        >
                                          Wacth Now
                                        </Button>
                                      </>
                                    )}
                                  </VerticalTimelineElement>
                                );
                              })}
                            </VerticalTimeline>
                          </div>
                        );
                      })}
                    </>
                  ) : ws == "ws" ? (
                    <>
                      <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12">
                        <div class="card" style={{ borderRadius: "10px" }}>
                          <div
                            class="card-header"
                            style={{
                              background: "rgb(33, 150, 243)",
                              color: "#fff",
                              margin: "10px auto",
                              position: "relative",
                              width: "100%",
                            }}
                          >
                            <h4>
                              Workshop{" "}
                              <p style={{ textAlign: "center" }}>
                                {dataWs.master.title}
                              </p>
                            </h4>
                          </div>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                              Topic : {dataWs.master.topic}
                            </li>
                            <li class="list-group-item">
                              Day,Date : {dataWs.master.day},{" "}
                              {dataWs.master.date}
                            </li>
                            <li class="list-group-item">
                              Course Director : {dataWs.master.course_director}
                            </li>
                            <li class="list-group-item">
                              PIC : {dataWs.master.pic}
                            </li>
                            <li class="list-group-item">
                              Moderator : {dataWs.master.moderator}
                            </li>
                          </ul>
                        </div>
                        <VerticalTimeline layout="1-column-left">
                          {dataWs.data.map((s, index1) => {
                            return (
                              <VerticalTimelineElement
                                key={index1}
                                className="vertical-timeline-element--work"
                                style={{ margin: "10px 0" }}
                                contentStyle={{
                                  background: "rgb(33, 150, 243)",
                                  color: "#fff",
                                  textAlign: "center",
                                }}
                                contentArrowStyle={{
                                  borderRight: "7px solid  rgb(33, 150, 243)",
                                }}
                                date={s.time_range}
                                iconStyle={{
                                  background: "rgb(33, 150, 243)",
                                  color: "#fff",
                                }}
                                icon={
                                  <i
                                    style={{
                                      position: "relative",
                                      left: "50%",
                                      top: "50%",
                                      transform: "translate(-50%, -50%)",
                                      fontSize: "25px",
                                    }}
                                    class="far fa-calendar-alt"
                                  ></i>
                                }
                              >
                                <h5 className="text-white vertical-timeline-element-title">
                                  {s.topic}
                                </h5>
                                <p>Speakers: {s.speaker ?? "tba"}</p>
                              </VerticalTimelineElement>
                            );
                          })}{" "}
                        </VerticalTimeline>
                      </div>
                    </>
                  ) : null}
                </CRow>
              </CCardBody>
            </CTabPane>
            <CTabPane data-tab="indoviscular">
              <CCardBody>
                <CRow>
                  <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                    {anggota.simposium != "" ? (
                      <>
                        <Button
                          type="primary"
                          onClick={() => {
                            setWs("PERTAMA");
                            changeDataSympo(1);
                          }}
                          style={{ marginLeft: "30px", borderRadius: "10px" }}
                        >
                          Sym 1
                        </Button>
                        <Button
                          type="primary"
                          onClick={() => {
                            setWs("KEDUA");
                            changeDataSympo(2);
                          }}
                          style={{ marginLeft: "2px", borderRadius: "10px" }}
                        >
                          Sym 2
                        </Button>
                        <Button
                          type="primary"
                          onClick={() => {
                            setWs("KETIGA");
                            changeDataSympo(3);
                          }}
                          style={{ marginLeft: "2px", borderRadius: "10px" }}
                        >
                          Sym 3
                        </Button>
                      </>
                    ) : null}
                    {workshopku.indexOf("WS Indovasc 1 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => setWs("1A")}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS Indo 1
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS Indovasc 2 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => setWs("1B")}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS Indo 2
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS Indovasc 3 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => setWs("1C")}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS Indo 3
                      </Button>
                    ) : null}
                  </div>
                </CRow>
                <CRow
                  style={{ marginTop: "30px" }}
                  className="jsutify-content-center"
                >
                  {ws == "sympo" ? (
                    <>
                      <h2
                        style={{
                          margin: "0 auto",
                          position: "relative",
                          width: "95%",
                          marginBottom: "25px",
                          color: "#4e4e4e",
                        }}
                      >
                        {`DAY-${dataSympo.master[0].serial_number} : ${
                          dataSympo.master[0].day
                        }, ${parseDate(dataSympo.master[0].date)}`}
                      </h2>
                      {dataSympo.detil.map((s, index1) => {
                        return (
                          <div
                            key={index1}
                            class={`col-lg-${
                              dataSympo.detil.length == 1
                                ? "12"
                                : dataSympo.detil.length > 1 &&
                                  dataSympo.detil.length >= 2
                                ? "6"
                                : dataSympo.detil.length > 2 &&
                                  dataSympo.detil.length <= 3
                                ? "4"
                                : dataSympo.detil.length > 3
                                ? "3"
                                : "12"
                            } col-md-${
                              dataSympo.detil.length == 1
                                ? "12"
                                : dataSympo.detil.length > 1 &&
                                  dataSympo.detil.length <= 3
                                ? "4"
                                : dataSympo.detil.length > 3
                                ? "3"
                                : "12"
                            } col-sm-12 col-xs-12`}
                          >
                            <h4
                              style={{
                                color: "#4e4e4e",
                                margin: "0 auto",
                                position: "relative",
                                width: "95%",
                              }}
                            >{`Ballroom ${index1 + 1}`}</h4>
                            <VerticalTimeline layout="1-column-left">
                              {dataSympo.detil[index1].map((row, index2) => {
                                return (
                                  <VerticalTimelineElement
                                    key={index2}
                                    className="vertical-timeline-element--work"
                                    style={{ margin: "10px 0" }}
                                    contentStyle={{
                                      background: "rgb(33, 150, 243)",
                                      color: "#fff",
                                      textAlign: "center",
                                    }}
                                    contentArrowStyle={{
                                      borderRight:
                                        "7px solid  rgb(33, 150, 243)",
                                    }}
                                    date={row.time_range}
                                    iconStyle={{
                                      background: "rgb(33, 150, 243)",
                                      color: "#fff",
                                    }}
                                    icon={
                                      <i
                                        style={{
                                          position: "relative",
                                          left: "50%",
                                          top: "50%",
                                          transform: "translate(-50%, -50%)",
                                          fontSize: "25px",
                                        }}
                                        class="far fa-calendar-alt"
                                      ></i>
                                    }
                                  >
                                    {row.tipe == "Activity" ? (
                                      <>
                                        <h5 className="text-white vertical-timeline-element-title">
                                          {row.topic}
                                        </h5>
                                        <p>Speaker: {row.speaker ?? "tba"}</p>
                                      </>
                                    ) : (
                                      <>
                                        <h5 className="text-white vertical-timeline-element-title">
                                          {row.topic}
                                        </h5>
                                        <p>
                                          Chairman: {row.chairman ?? "tba"}{" "}
                                          <br /> Panelist:{" "}
                                          {row.panelist ?? "tba"}
                                        </p>
                                        <br />
                                        <Button
                                          type="primary"
                                          style={{
                                            borderRadius: "10px",
                                            background: "#2a3d9f",
                                            position: "absolute",
                                            right: "15px",
                                            bottom: "16px",
                                          }}
                                          onClick=""
                                        >
                                          Wacth Now
                                        </Button>
                                      </>
                                    )}
                                  </VerticalTimelineElement>
                                );
                              })}
                            </VerticalTimeline>
                          </div>
                        );
                      })}
                    </>
                  ) : ws == "1A" ? (
                   <> 
                     <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12">
                        <div class="card" style={{ borderRadius: "10px" }}>
                          <div
                            class="card-header"
                            style={{
                              background: "rgb(33, 150, 243)",
                              color: "#fff",
                              margin: "10px auto",
                              position: "relative",
                              width: "100%",
                            }}
                          >
                            <h4>
                              Workshop{" "}
                              <p style={{ textAlign: "center" }}>
                                {dataWs.master.title}
                              </p>
                            </h4>
                          </div>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                              Topic : {dataWs.master.topic}
                            </li>
                            <li class="list-group-item">
                              Day,Date : {dataWs.master.day},{" "}
                              {dataWs.master.date}
                            </li>
                            <li class="list-group-item">
                              Course Director : {dataWs.master.course_director}
                            </li>
                            <li class="list-group-item">
                              PIC : {dataWs.master.pic}
                            </li>
                            <li class="list-group-item">
                              Moderator : {dataWs.master.moderator}
                            </li>
                          </ul>
                        </div>
                        <VerticalTimeline layout="1-column-left">
                          {dataWs.data.map((s, index1) => {
                            return (
                              <VerticalTimelineElement
                                key={index1}
                                className="vertical-timeline-element--work"
                                style={{ margin: "10px 0" }}
                                contentStyle={{
                                  background: "rgb(33, 150, 243)",
                                  color: "#fff",
                                  textAlign: "center",
                                }}
                                contentArrowStyle={{
                                  borderRight: "7px solid  rgb(33, 150, 243)",
                                }}
                                date={s.time_range}
                                iconStyle={{
                                  background: "rgb(33, 150, 243)",
                                  color: "#fff",
                                }}
                                icon={
                                  <i
                                    style={{
                                      position: "relative",
                                      left: "50%",
                                      top: "50%",
                                      transform: "translate(-50%, -50%)",
                                      fontSize: "25px",
                                    }}
                                    class="far fa-calendar-alt"
                                  ></i>
                                }
                              >
                                <h5 className="text-white vertical-timeline-element-title">
                                  {s.topic}
                                </h5>
                                <p>Speakers: {s.speaker ?? "tba"}</p>
                              </VerticalTimelineElement>
                            );
                          })}{" "}
                        </VerticalTimeline>
                      </div>
                   </>  
                 ) : ws == "1B" ? (
                    <> 
                     <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12">
                        <div class="card" style={{ borderRadius: "10px" }}>
                          <div
                            class="card-header"
                            style={{
                              background: "rgb(33, 150, 243)",
                              color: "#fff",
                              margin: "10px auto",
                              position: "relative",
                              width: "100%",
                            }}
                          >
                            <h4>
                              Workshop{" "}
                              <p style={{ textAlign: "center" }}>
                                {dataWs.master.title}
                              </p>
                            </h4>
                          </div>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                              Topic : {dataWs.master.topic}
                            </li>
                            <li class="list-group-item">
                              Day,Date : {dataWs.master.day},{" "}
                              {dataWs.master.date}
                            </li>
                            <li class="list-group-item">
                              Course Director : {dataWs.master.course_director}
                            </li>
                            <li class="list-group-item">
                              PIC : {dataWs.master.pic}
                            </li>
                            <li class="list-group-item">
                              Moderator : {dataWs.master.moderator}
                            </li>
                          </ul>
                        </div>
                        <VerticalTimeline layout="1-column-left">
                          {dataWs.data.map((s, index1) => {
                            return (
                              <VerticalTimelineElement
                                key={index1}
                                className="vertical-timeline-element--work"
                                style={{ margin: "10px 0" }}
                                contentStyle={{
                                  background: "rgb(33, 150, 243)",
                                  color: "#fff",
                                  textAlign: "center",
                                }}
                                contentArrowStyle={{
                                  borderRight: "7px solid  rgb(33, 150, 243)",
                                }}
                                date={s.time_range}
                                iconStyle={{
                                  background: "rgb(33, 150, 243)",
                                  color: "#fff",
                                }}
                                icon={
                                  <i
                                    style={{
                                      position: "relative",
                                      left: "50%",
                                      top: "50%",
                                      transform: "translate(-50%, -50%)",
                                      fontSize: "25px",
                                    }}
                                    class="far fa-calendar-alt"
                                  ></i>
                                }
                              >
                                <h5 className="text-white vertical-timeline-element-title">
                                  {s.topic}
                                </h5>
                                <p>Speakers: {s.speaker ?? "tba"}</p>
                              </VerticalTimelineElement>
                            );
                          })}{" "}
                        </VerticalTimeline>
                      </div>
                   </>  
                   
                  ) : ws == "1C" ? (
                      <> 
                     <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12">
                        <div class="card" style={{ borderRadius: "10px" }}>
                          <div
                            class="card-header"
                            style={{
                              background: "rgb(33, 150, 243)",
                              color: "#fff",
                              margin: "10px auto",
                              position: "relative",
                              width: "100%",
                            }}
                          >
                            <h4>
                              Workshop{" "}
                              <p style={{ textAlign: "center" }}>
                                {dataWs.master.title}
                              </p>
                            </h4>
                          </div>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                              Topic : {dataWs.master.topic}
                            </li>
                            <li class="list-group-item">
                              Day,Date : {dataWs.master.day},{" "}
                              {dataWs.master.date}
                            </li>
                            <li class="list-group-item">
                              Course Director : {dataWs.master.course_director}
                            </li>
                            <li class="list-group-item">
                              PIC : {dataWs.master.pic}
                            </li>
                            <li class="list-group-item">
                              Moderator : {dataWs.master.moderator}
                            </li>
                          </ul>
                        </div>
                        <VerticalTimeline layout="1-column-left">
                          {dataWs.data.map((s, index1) => {
                            return (
                              <VerticalTimelineElement
                                key={index1}
                                className="vertical-timeline-element--work"
                                style={{ margin: "10px 0" }}
                                contentStyle={{
                                  background: "rgb(33, 150, 243)",
                                  color: "#fff",
                                  textAlign: "center",
                                }}
                                contentArrowStyle={{
                                  borderRight: "7px solid  rgb(33, 150, 243)",
                                }}
                                date={s.time_range}
                                iconStyle={{
                                  background: "rgb(33, 150, 243)",
                                  color: "#fff",
                                }}
                                icon={
                                  <i
                                    style={{
                                      position: "relative",
                                      left: "50%",
                                      top: "50%",
                                      transform: "translate(-50%, -50%)",
                                      fontSize: "25px",
                                    }}
                                    class="far fa-calendar-alt"
                                  ></i>
                                }
                              >
                                <h5 className="text-white vertical-timeline-element-title">
                                  {s.topic}
                                </h5>
                                <p>Speakers: {s.speaker ?? "tba"}</p>
                              </VerticalTimelineElement>
                            );
                          })}{" "}
                        </VerticalTimeline>
                      </div>
                   </>  
                  ) : null}
                </CRow>
              </CCardBody>
            </CTabPane>
          </CTabContent>
        </CTabs>
      </CCard>
    </>
  );
};

export default Colors;
