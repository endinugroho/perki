import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import axios from 'axios';
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/reusable'
import { Stepper } from 'react-form-stepper';
import { Modal,DatePicker,Input,Form, Radio, Select, Button} from 'antd';
import 'antd/dist/antd.css';
import { mixed } from 'yup/lib/locale'
import { useHistory } from "react-router-dom";
import generator from "generate-password";
const { confirm } = Modal;
const FormItem = Form.Item;
const { Option } = Select;
const { Search } = Input;
const { TextArea } = Input;



const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()
  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
      <tr style={{border: "1px solid rgb(1,77,136)"}}>
        <td className="text-muted">HEX:</td>
        <td className="font-weight-bold">{ rgbToHex(color) }</td>
      </tr>
      <tr style={{border: "1px solid rgb(1,77,136)"}}>
        <td className="text-muted">RGB:</td>
        <td className="font-weight-bold">{ color }</td>
      </tr>
      </tbody>
    </table>
    )
}


const onChange = (date, dateString) => {
  console.log(date, dateString);
}

const ThemeColor = ({className, children}) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
      <div className={classes} style={{paddingTop: '75%'}}></div>
      {children}
      <ThemeView/>
    </CCol>
  )
}

const Colors = () => {
  const [step, setStep] = useState('Step1');
  const [propinsiselect, setPropinsiselect] = useState('Jawa Timur');
  const [kotaselect, setKotaselect] = useState('Surabaya');
  const [professionselect, setProfessionselect] = useState('Cardiologist');
  const [packageselect, setPackageselect] = useState('');
  const [hargatambahan,setHargatambahan] = useState('');
  const [hargatotal,setHargatotal] = useState('');
  const [hargapromo,setHargapromo] = useState(0);
  const [hargagrandtotal,setHargagrandtotal] = useState('');
  const [hargaservice,setHargaservice] = useState('');
  // const [hargatotal,setHargatotal] = useState('');
  const [macamworkshop,setMacamworkshop] = useState([]);
  const [jumlahworkshop,setJumlahworkshop] = useState(0);
  const [hargaworkshop,setHargaworkshop] = useState("500000");
  const [jumlahworkshopdipilih,setJumlahworkshopdipilih] = useState(0);
  const [pilih,setPilih] = useState(0);
  const [pilih2,setPilih2] = useState(0);
  const [kodevoucher,setKodevoucher] = useState("");
  const [myform, setMyform] = useState({firstname:"",lastname:"",fullname:"",gender:"",pob:"",dob:"",county:"Indonesia",province:"Jawa Timur",city:"Surabaya",email:"",emailconfirm:"",password:"",mobile:"",affliliation:"",officeph:""});
  let history = useHistory();
  const [disable,setDisable] = useState(false);
  const [simposium, setSimposium] = useState("");
const [idanggota,setIdanggota] = useState("");
const [nama,setNama] = useState("");
const [idsponsor, setIdsponsor] = useState("");
const [anggota,setAnggota] = useState("");
const [workshopku,setWorkshopku] = useState("");
const [ws, setWs] = useState("-");
const [hari, setHari] = useState("PERTAMA");
// const []
const [meetingid1,setMeetingid1] = useState("79190715224");
const [meetingid2,setMeetingid2] = useState("");
const [meetingid3,setMeetingid3] = useState("");
const [meetingid4,setMeetingid4] = useState("");
const [meetingid5,setMeetingid5] = useState("");
const [meetingid6,setMeetingid6] = useState("");
const [meetingid7,setMeetingid7] = useState("");
const [meetingid8,setMeetingid8] = useState("");
const [meetingid9,setMeetingid9] = useState("");
const [meetingid10,setMeetingid10] = useState("");


  const [workshopprice,setWorkshopprice] = useState([{profession:"Medical Student",price:"IDR 10,000"},
  {profession:"GP",price:"IDR 300,000"},
  {profession:"Cardiologist",price:"IDR 500,000"},
  {profession:"Other Specialists",price:"IDR 500,000"},
  {profession:"Nurse or Paramedics",price:"IDR 150,000"}]);

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

  // const [kota,setKota] = useState(
  const [simposiumprice,setSimposiumprice] = useState([{profession:"Medical Student",price:"IDR 10,000"},
  {profession:"GP",price:"IDR 300,000"},
  {profession:"Cardiologist",price:"IDR 500,000"},
  {profession:"Other Specialist",price:"IDR 500,000"},
  {profession:"Nurse or Paramedics",price:"IDR 150,000"}]);


  const [hargapaket,setHargapaket] = useState([
  // {profession:"Cardiologist",package:"-",price:"0"},
  {profession:"Cardiologist",package:"Silver (Symposium+2 workshop*)",price:"IDR 1,200,000",jumlah:2},
  {profession:"Cardiologist",package:"Gold (Symposium+4 workshop*)",price:"IDR 1,800,000",jumlah:4},
  {profession:"Cardiologist",package:"Platinum (Symposium+6 workshop*)",price:"IDR 2,300,000",jumlah:6},
  // {profession:"Other specialists",package:"-",price:"0"},
  {profession:"Other Specialist",package:"Silver (Symposium+2 workshop*)",price:"IDR 1,200,000",jumlah:2},
  {profession:"Other Specialist",package:"Gold (Symposium+4 workshop*)",price:"IDR 1,800,000",jumlah:4},
  {profession:"Other Specialist",package:"Platinum (Symposium+6 workshop*)",price:"IDR 2,300,000",jumlah:6},
  // {profession:"GP",package:"-",price:"0"},
  {profession:"GP",package:"Silver (Symposium+2 workshop*)",price:"IDR 550,000",jumlah:2},
  {profession:"GP",package:"Gold (Symposium+4 workshop*)",price:"IDR 700,000",jumlah:4},
  {profession:"GP",package:"Platinum (Symposium+6 workshop*)",price:"IDR 850,000",jumlah:6},
  // {profession:"Medical Student",package:"-",price:"0"},
  {profession:"Medical Student",package:"Silver (Symposium+2 workshop*)",price:"IDR 250,000",jumlah:2},
  {profession:"Medical Student",package:"Gold (Symposium+4 workshop*)",price:"IDR 300,000",jumlah:4},
  {profession:"Medical Student",package:"Platinum (Symposium+6 workshop*)",price:"IDR 350,000",jumlah:6},
  // {profession:"Nurse or Paramedics",package:"-",price:"0"},
  {profession:"Nurse or Paramedics",package:"Silver (Symposium+2 workshop*)",price:"IDR 225,000",jumlah:2}]);

  const [workshopprof,setWorkshopprof] = useState([
  {profession:"GP",name:"WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)"},
  {profession:"GP",name:"WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)"},
  {profession:"GP",name:"WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)"},
  {profession:"GP",name:"WS 7 (Comprehensive CV Risk Stratification)"},
  {profession:"GP",name:"WS 9 (Practical Approach in Emergency Arrythmias)"},
  {profession:"GP",name:"WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskulardi Lini Terdepan: Fokus pada Terapi Trombolitik)"},
  {profession:"GP",name:"WS 11 (Rapid Echocardiography in Emergency Setting)"},
  {profession:"GP",name:"WS 13 (Advanced in Diagnosing Acute Heart Failure)"},
  {profession:"Cardiologist",name:"WS 1 (Pregnancy and Heart Disease: What is the Most Common Cardiovascular Problem on It?)"},
  {profession:"Cardiologist",name:"WS 2 (Perioperative Cardiac Consultation)"},
  {profession:"Cardiologist",name:"WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)"},
  {profession:"Cardiologist",name:"WS 4 (Cardiac Injury in Chemotherapy Patient)"},
  {profession:"Cardiologist",name:"WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)"},
  {profession:"Cardiologist",name:"WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)"},
  {profession:"Cardiologist",name:"WS 7 (Comprehensive CV Risk Stratification)"},
  {profession:"Cardiologist",name:"WS 8 (Practical approach to non-invasive ventilation in acute heart failure)"},
  {profession:"Cardiologist",name:"WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)"},
  {profession:"Cardiologist",name:"WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)"},
  {profession:"Cardiologist",name:"WS 15 (Cardiomyopathy Evaluation by Cardiac MR)"},
  {profession:"Cardiologist",name:"WS 16 (Cardiac CT in Coronary Artery and Beyond)"},
  {profession:"Cardiologist",name:"WS Indovasc 1 (Early Detection of Chronic Venous Insufficiency)"},
  {profession:"Cardiologist",name:"WS Indovasc 2 (Vascular Doppler US)"},
  {profession:"Cardiologist",name:"WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"},
  {profession:"Other Specialists",name:"WS 1 (Pregnancy and Heart Disease: What is the Most Common Cardiovascular Problem on It?)"},
  {profession:"Other Specialists",name:"WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)"},
  {profession:"Other Specialists",name:"WS 4 (Cardiac Injury in Chemotherapy Patient)"},
  {profession:"Other Specialists",name:"WS 7 (Comprehensive CV Risk Stratification)"},
  {profession:"Other Specialists",name:"WS 8 (Practical approach to non-invasive ventilation in acute heart failure)"},
  {profession:"Other Specialists",name:"WS 9 (Practical Approach in Emergency Arrythmias)"},
  {profession:"Other Specialists",name:"WS 11 (Rapid Echocardiography in Emergency Setting)"},
  {profession:"Other Specialists",name:"WS 13 (Advanced in Diagnosing Acute Heart Failure)"},
  {profession:"Other Specialists",name:"WS 15 (Cardiomyopathy Evaluation by Cardiac MR)"},
  {profession:"Other Specialists",name:"WS 16 (Cardiac CT in Coronary Artery and Beyond)"},
  {profession:"Nurse or Paramedics",name:"Ws 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)"},
  {profession:"Nurse or Paramedics",name:"WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskular di Lini Terdepan: Fokus pada Terapi Trombolitik)"},
  {profession:"Medical Student",name:"WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)"},
  {profession:"Medical Student",name:"WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)"},
  {profession:"Medical Student",name:"WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)"},
  {profession:"Medical Student",name:"WS 7 (Comprehensive CV Risk Stratification)"},
  {profession:"Medical Student",name:"WS 9 (Practical Approach in Emergency Arrythmias)"},
  {profession:"Medical Student",name:"WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskulardi Lini Terdepan: Fokus pada Terapi Trombolitik)"},
  {profession:"Medical Student",name:"WS 11 (Rapid Echocardiography in Emergency Setting)"},
  {profession:"Medical Student",name:"WS 13 (Advanced in Diagnosing Acute Heart Failure)"},


]);

useEffect(() => {
  var idsponsor = localStorage.getItem("loginid");
  setIdsponsor(idsponsor);
  var anggotast = localStorage.getItem("status");
  if (anggotast=="ANGGOTA") {
    setAnggota(true) } else setAnggota(false);
  setNama(localStorage.getItem("nama"))

var mtd2 ="";
if (anggotast=="ANGGOTA") {
  mtd2 = "ANGGOTA2";
} else
{
  mtd2 = "ANGGOTA";
}


  axios({
    url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
    // url: "http://localhost/perki/kirimdata.php",
    data: {mtd: mtd2,idsponsor:idsponsor},
    contentType: "application/json",
    method: 'POST',
  })
    .then((data) => {
      // var temp = data.data;
      console.log(data.data[0]);
      setAnggota(data.data[0]);
      setWorkshopku(data.data[0].workshop);
    })
    .catch(() => {
      console.log('Internal server error');
    });

}, [])



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
    setPilih(0)
   setHargatotal(0);
   setHargagrandtotal(0);

    workshopprice.filter(ch => ch.profession === value).map((item) =>
      setHargaworkshop(item.price.replace("IDR ","").replace(",",""))
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
    if (value.substr(0,1)=="S") {
      setPilih2("packagesilver");
    } else if (value.substr(0,1)=="G") {
      setPilih2("packagegold");
    } else {
      setPilih2("packageplatinum");

    }
  };

  const handleChange6 = (value) => {
    console.log(`selected ${value}`);

    setHargaservice(value);
    setHargagrandtotal(parseInt(value)+parseInt(hargatotal.replace("IDR ","").replace(",","").replace(",",""))+parseInt(hargatambahan));

  };


  const handleChange5 = (value) => {
    console.log(`selected ${value}`);

    // setPackageselect(value);
    // setHargatotal(value.split("#")[1]);
    if (pilih==4) value=[value];
    console.log("workshop",value);
    setMacamworkshop(value);

    setJumlahworkshopdipilih(value.length);

    if (pilih===3)
    {
      if ((value.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) && (value.indexOf("WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)")>-1)) {
        alert("Ws 12 and WS Indovac 2 run in same time");
      }
      if ((value.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) && (value.indexOf("WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)")>-1)) {
        alert("Ws 14 and WS Indovac 2 run in same time");
      }
      if ((value.indexOf("WS 15 (Cardiomyopathy Evaluation by Cardiac MR)")>-1) && (value.indexOf("WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)")>-1)) {
        alert("Ws 15 and WS Indovac 3 run in same time");
      }
      if ((value.indexOf("WS 16 (Cardiac CT in Coronary Artery and Beyond)")>-1) && (value.indexOf("WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)")>-1)) {
        alert("Ws 16 and WS Indovac 3 run in same time");
      }
      if (value.length>jumlahworkshop)
      {
        setHargatambahan((value.length-jumlahworkshop)*hargaworkshop);
        setHargagrandtotal(parseInt(hargatotal.replace("IDR ","").replace(",","").replace(",",""))+(value.length-jumlahworkshop)*hargaworkshop);
      } else
      {
        setHargatambahan(0);
        setHargagrandtotal(parseInt(hargatotal.replace("IDR ","").replace(",","").replace(",","")));
      }
    }

    if (pilih==2)
    {
      if ((value.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) && (value.indexOf("WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)")>-1)) {
        alert("Ws 12 and WS Indovac 2 run in same time");
      }
      if ((value.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) && (value.indexOf("WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)")>-1)) {
        alert("Ws 14 and WS Indovac 2 run in same time");
      }
      if ((value.indexOf("WS 15 (Cardiomyopathy Evaluation by Cardiac MR)")>-1) && (value.indexOf("WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)")>-1)) {
        alert("Ws 15 and WS Indovac 3 run in same time");
      }
      if ((value.indexOf("WS 16 (Cardiac CT in Coronary Artery and Beyond)")>-1) && (value.indexOf("WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)")>-1)) {
        alert("Ws 16 and WS Indovac 3 run in same time");
      }
      setHargatotal(value.length*hargaworkshop);
      setHargagrandtotal(value.length*hargaworkshop);
    }

    // setHargatotal

  };

  const onSearch = value => {
    console.log(value);
    if (value=="") {
      alert("Silakan isi kode promo");return;
    }

    const payload = {
      kode : value,
      mtd:"CEK"
    }
    axios({
      url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
      // url: "http://localhost/perki/kirimdata.php",
      data: payload,
      contentType: "application/json",
      method: 'POST',
    })
      .then((data) => {
        var temp = data.data;
        console.log(temp);
        if (temp.sukses=="OK") {
          alert("Promo valid diskon Rp100,000");
          setHargapromo(100000);
          setHargagrandtotal(hargagrandtotal-100000);
        } else {
          alert("Promo tidak valid");
        }
      })
      .catch(() => {
        console.log('Internal server error');
      });

  }
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
    symbols: false
  });
  if ((macamworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) && (macamworkshop.indexOf("WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)")>-1)) {
    alert("Ws 12 and WS Indovac 2 run in same time");return;
  }
  if ((macamworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) && (macamworkshop.indexOf("WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)")>-1)) {
    alert("Ws 14 and WS Indovac 2 run in same time");return;
  }
  if ((macamworkshop.indexOf("WS 15 (Cardiomyopathy Evaluation by Cardiac MR)")>-1) && (macamworkshop.indexOf("WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)")>-1)) {
    alert("Ws 15 and WS Indovac 3 run in same time");return;
  }
  if ((macamworkshop.indexOf("WS 16 (Cardiac CT in Coronary Artery and Beyond)")>-1) && (macamworkshop.indexOf("WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)")>-1)) {
    alert("Ws 16 and WS Indovac 3 run in same time");return;
  }
  setDisable(true);
  var idsponsor = localStorage.getItem('loginid');
  console.log("masuk sini simpan",macamworkshop);
var simposium2="";
if (pilih===1 || pilih===3 || pilih===4) simposium2=simposium;

 axios({
  method: "POST",
  url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
  // url: "http://localhost/perki/kirimdata.php",
  data: {"firstname":myform.firstname,"lastname":myform.lastname,"profession":professionselect,"fullnamecert":myform.fullname,"gender":myform.gender,"placedob":myform.pob,"address":"","country":myform.county,"province":myform.province,"city":myform.city,"email":myform.email,"password":pwd,"mobilephone":myform.mobile,"affiliation":myform.affliliation,"officemobilephone":myform.officeph,"simposium":simposium,"workshopprice":hargaworkshop,"package":packageselect,"workshop":macamworkshop,"payment":"Mid Trans","promocode":myform.promocode,"total":hargagrandtotal,"mtd":'ADDANGGOTA',"idsponsor":idsponsor,"pilih":pilih2},
  contentType: "application/json",
})
  .then((data) => {
    console.log(data);
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>{"Data sudah tersimpan"}</p>
        </div>
      ),
      onOk() {
        history.push('/theme/sponsor');
        // history.push('https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/sponsor');

        // /demo/conference1/wp-content/plugins/perki/build/#/theme/perki

      },
    });
})
  .catch(() => {
    console.log('Internal server error');
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


}

const openInNewTab = (url,meetingidku) => {
  // window.location.href = url;
  localStorage.setItem("meetingid",meetingidku);
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}


const handleKlik = (value) => {
  console.log(`selected ${value}`);

}

  const klikStep1 = () => {
var emptytext="";
console.log(step);
if (step=="Step1")
{
    if (myform.fullname==="") emptytext=emptytext+"full name,";
    if (myform.gender==="") emptytext=emptytext+"gender,";
    if (myform.address==="") emptytext=emptytext+"address,";
    if (myform.email==="") emptytext=emptytext+"email,";
    if (myform.emailconfirm==="") emptytext=emptytext+"email confirm,";
    // if (myform.password==="") emptytext=emptytext+"password,";
    // if (myform.passwordconfirm==="") emptytext=emptytext+"password confirm,";
    if (myform.mobile==="") emptytext=emptytext+"mobile,";
    if (myform.affliliation==="") emptytext=emptytext+"affiliation,";

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
    const payload = {
      email : myform.email,
      mtd:"CEKEMAIL"
    }
    axios({
      url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
      // url: "http://localhost/perki/kirimdata.php",
      data: payload,
      contentType: "application/json",
      method: 'POST',
    })
      .then((data) => {
        var temp = data.data;
        console.log(temp);
        if (temp.sukses=="OK") {
          alert("Email sudah digunakan");
          return;
        } else {
          setStep("Step2");return;

        }

      })
      .catch(() => {
        console.log('Internal server error');
      });


    }    // }

if (step=="Step2")
{
  if (jumlahworkshop>jumlahworkshopdipilih) {
    alert("You must select more workshop");return;
  }
  if ((macamworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) && (macamworkshop.indexOf("WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)")>-1)) {
    alert("Ws 12 and WS Indovac 2 run in same time");return;
  }
  if ((macamworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) && (macamworkshop.indexOf("WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)")>-1)) {
    alert("Ws 14 and WS Indovac 2 run in same time");return;
  }
  if ((macamworkshop.indexOf("WS 15 (Cardiomyopathy Evaluation by Cardiac MR)")>-1) && (macamworkshop.indexOf("WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)")>-1)) {
    alert("Ws 15 and WS Indovac 3 run in same time");return;
  }
  if ((macamworkshop.indexOf("WS 16 (Cardiac CT in Coronary Artery and Beyond)")>-1) && (macamworkshop.indexOf("WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)")>-1)) {
    alert("Ws 16 and WS Indovac 3 run in same time");return;
  }
  simpan();
// setStep("Step3");return;
  window.scrollTo(0, 0);
}


  }

const pilihanku = (value) =>
{
  console.log(professionselect);
  console.log("pilih",value);
  if (value===1) {
    simposiumprice.filter(ch => ch.profession === professionselect).map((item) =>
     // setHargatotal(item.price)
    //  console.log("price",item.price)
     {
       setHargatotal(item.price.replace("IDR ","").replace(",",""));
     setHargagrandtotal(item.price.replace("IDR ","").replace(",",""));
    }
     );
     setMacamworkshop([]);
     setJumlahworkshop(0);
     setJumlahworkshopdipilih(0);
     setPackageselect("");


    // simposiumprice.filter()
  }
  if (value===2) {
    setPackageselect("");
  }

  if (value===4) {
    var hargasimpo = 0;
    var hargaws = 0
    simposiumprice.filter(ch => ch.profession === professionselect).map((item) =>
     {
      hargasimpo = parseInt(item.price.replace("IDR ","").replace(",",""));
    }
     );
    workshopprice.filter(ch => ch.profession === professionselect).map((item) =>
    {
     hargaws = parseInt(item.price.replace("IDR ","").replace(",",""));
   }
    );

     setPackageselect("");
    setHargatotal(hargasimpo+hargaws);
    setHargagrandtotal(hargasimpo+hargaws);
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
  if (value=="1")
  {
    setPilih2("simposium");
  } else if (value==2) {
    setPilih2("workshop");
  } else if (value==3) {
    setPilih2("package");
  } else {
    setPilih2("seminar,workshop");
  }



    //  setPilih2(value);

}
  return (
    <>
      <CCard>
        <CCardHeader style={{fontSize:"25px"}}>
          Session
        </CCardHeader>
        {/* <CCardBody style={{backgroundImage: "url('https://acsasurabaya2021.com/wp-content/plugins/perki/background3.png')"}}> */}
        <CCardBody>
          <CRow>
          {anggota.simposium!="" ?

            <div>
            <Button type="primary" onClick={()=>setWs("PERTAMA")} style={{marginLeft:"30px"}}>Sym 1</Button>
            <Button type="primary" onClick={()=>setWs("KEDUA")} style={{marginLeft:"2px"}}>Sym 2</Button>
            <Button type="primary" onClick={()=>setWs("KETIGA")} style={{marginLeft:"2px"}}>Sym 3</Button>

            </div>
            :
            null

          }
          {workshopku.indexOf("WS 1 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("1")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 1</Button> : null
          }
          {/* <Button type="primary" onClick={()=>setWs("1")} style={{marginLeft:"2px", marginBottom:"5px"}}>1</Button> */}
          {workshopku.indexOf("WS 2 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("2")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 2</Button> : null
          }
          {workshopku.indexOf("WS 3 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("3")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 3</Button> : null
        }
          {workshopku.indexOf("WS 4 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("4")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 4</Button> : null
        }
          {workshopku.indexOf("WS 5 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("5")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 5</Button> : null
        }
          {workshopku.indexOf("WS 6 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("6")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 6</Button> : null
        }
          {workshopku.indexOf("WS 7 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("7")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 7</Button> : null
        }
          {workshopku.indexOf("WS 8 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("8")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 8</Button> : null
        }
          {workshopku.indexOf("WS 9 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("9")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 9</Button> : null
        }
          {workshopku.indexOf("WS 10 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("10")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 10</Button> : null
        }
          {workshopku.indexOf("WS 11 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("11")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 11</Button> : null
        }
          {workshopku.indexOf("WS 12 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("12")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 12</Button> : null
        }
          {workshopku.indexOf("WS 13 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("13")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 13</Button> : null
        }
          {workshopku.indexOf("WS 14 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("14")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 14</Button> : null
        }
          {workshopku.indexOf("WS 15 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("15")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 15</Button> : null
        }
          {workshopku.indexOf("WS 16 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("16")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 16</Button> : null
        }
          {workshopku.indexOf("WS Indovasc 1 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("1A")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS Indo 1</Button> : null
        }
          {workshopku.indexOf("WS Indovasc 2 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("1B")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS Indo 2</Button> : null
        }
          {workshopku.indexOf("WS Indovasc 3 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("1C")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS Indo 3</Button> : null
        }
          </CRow>
          <CRow>
          {ws=="PERTAMA" ?
          <div><p><strong>&nbsp;</strong></p>
          <p style={{marginLeft:"30px",fontSize:"25px"}}><b>DAY-1: Friday, 10 December 2021</b></p>
          <table width="90%" style={{marginLeft:"30px", border: "1px solid rgb(1,77,136)"}}>
          <tbody>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "#0075BC", color:"white",paddingLeft:"15px"}} width="10%">
          <p><b>TIME</b></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>SESSION</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>SESSION</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>Warm-Up Session</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>BRAINSTROMING, A NEW PERSPECTIVE IN</strong></p>
          <p><strong>CARDIONEUROLOGY</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>DRUG INTERACTION</strong></p>
          <p><strong>&nbsp;</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(08.00 &ndash; 08.20)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Heart-Brain Axis: The Neuroscience Aspects,</strong></p>
          <p><strong>More Than Just Issues</strong></p>
          <p><em>Speaker: tba</em></p>
          <table style={{borderCollapse:"collapse", width: "124.652px"}} border="0">
<tbody>
<tr style={{border: "1px solid rgb(1,77,136)"}}>
<td style={{width: "228px"}} colspan="3"><b>Zoom data login</b></td>
</tr>
{/* <tr style={{border: "1px solid rgb(1,77,136)"}}>
<td style={{width: "76px"}}>MeetingID</td>
<td style={{width: "6px"}}>:</td>
<td style={{width: "140px"}}><input type="text" value={meetingid1} /></td>
</tr> */}
{/* <tr style={{border: "1px solid rgb(1,77,136)"}}>
<td style={{width: "67px"}}>Password</td>
<td style={{width: "6px"}}>:</td>
<td style={{width: "149px"}}><input type="password" value="L0hndXQ4aEx1NXlTN1FHUW9yOTJiUT09"/></td>
</tr> */}
<tr style={{border: "1px solid rgb(1,77,136)"}}>
{/* <td style={{width: "76px"}}>&nbsp;</td>
<td style={{width: "6px"}}>&nbsp;</td> */}
{/* <td style={{width: "140px"}}><Button type="primary" onClick={() => openInNewTab('https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/zoom/12345', meetingid1)}> Goto Zoom </Button></td> */}
<td style={{width: "140px"}}><Button type="primary" onClick={() => openInNewTab('http://localhost:3000/#/theme/zoom/12345', meetingid1)}> Goto Zoom </Button></td>
</tr>
</tbody>
</table>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Most Common Cardiovascular Drugs</strong> <strong>(HF &amp; CCS)</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(08.20 &ndash; 08.40)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>New Term for Cardiologist : Hemodynamic </strong><strong>Stroke</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How Common Drug Interaction among In- and Out- </strong><strong>Patients Is?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(08.40 &ndash; 09.00)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Simultaneous Investigation : Arrhythmia &amp; Clot </strong><strong>Source</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How Cardiovascular Drugs Should Be Adjusted?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.00 &ndash; 09.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Morning Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>PLENARY: RESEARCH FINDINGS IN COVID- </strong><strong>19</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ACUTE CORONARY SYNDROME</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.15 &ndash; 09.35)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>COVID-19: Genomic Variations and Clinical </strong><strong>Manifestations</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Acute Coronary Syndrome: New Insight during Pandemic</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(09.35 &ndash; 09.55)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Plasma Convalescence : Surabaya Experience</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Symptoms to balloon time</strong> <strong>has stronger impacts</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(09.55 &ndash; 10.15)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Covid &amp; Pneumonia : 2 sides of a Coin</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>No More MONACO</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(10.15 &ndash; 10.35)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cardiac Injury in COVID-19/Arrhthymia</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Introducing A New Kind of ACS: MINOCA</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(10.35 &ndash; 10.55)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cytokine Storm and Metabolic Problems in COVID-19</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cath-Lab Dedicated Covid-19: Is It That Urgent?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(10.55 &ndash; 11.05)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(11.05 &ndash; 12.30)</p>
          </td>
          <td colspan="2" width="633" style={{paddingLeft:"15px"}}>
          <p><strong>FRIDAY PRAYER</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>Lunch Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>IN-DEPTH SESSION: BASIC THINGS IN </strong><strong>COVID-19</strong></p>
          <p><em>Chairman: tba</em></p>
          <p><em>Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>STEMI: FOCUS ON REVASCULARIZATION</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(12.30 &ndash; 12.50)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Pneumonia: Classifications and Stages</strong></p>
          <p><em>Speaker:tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Immediate Thrombolysis in the ER</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(12.50 &ndash; 13.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Markers of Inflammation in COVID-19</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How Thrombolysis Should be Performed?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(13.10 &ndash; 13.30)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>The Role of Non-Invasive (Echocardiography)</strong></p>
          <p><strong>Monitoring in COVID-19 ICU</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How To Optimize Myocardial Recovery after STEMI?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          </tbody>
          </table>
          <p>&nbsp;</p>
          <p><strong>&nbsp;</strong></p>
          <table style={{marginLeft:"30px",border: "1px solid blue",width:"90%"}}>
          <tbody>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(13.30 &ndash; 13.50)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>&nbsp;</strong></p>
          <p><strong>ECMO in Covid 19 :</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>&nbsp;</strong></p>
          <p><strong>Surabaya STEMI Network</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(13.50 &ndash; 14.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>Afternoon Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How to Interpret Laboratory Findings: How to Recognize Troponitis Disease</strong></p>
          <p><em>Chairman: tba</em></p>
          <p><em>Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ACUTE CARDIAC CARE &ndash; 1</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(14.15 &ndash; 14.35)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How Actually Troponin Enters The Blood Stream?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Valvular Disease in Acute Heart Failure</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(14.35 &ndash; 14.55)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How The Markers Detects Its Existence and How</strong></p>
          <p><strong>Should It be Interpreted?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Mechanical Ventilation Setting in Acute Heart Failure:</strong></p>
          <p><strong>Some Hints!</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(14.55 &ndash; 15.15)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Synchronizing with The Clinical Constellations</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Nutrition, and Diet for ICCU Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(15.15 &ndash; 15.25)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Afternoon Symposium &ndash; 2</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Laboratory Findings in COVID-19: What The </strong><strong>Expert Says? &ndash; 1</strong></p>
          <p><em>Chairman: tba</em></p>
          <p><em>Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ACUTE CARDIAC CARE &ndash; 2</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(15.30 &ndash; 15.50)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Blood Gas Analysis in COVID-19 Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>The Present and Future Hope of</strong> <strong>ICCU/CVCU</strong></p>
          <p><em>Speaker : tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(15.50 &ndash; 16.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Laboratory FIndings in COVID-19: What Should We Aware Of?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Post-Operative Care Management: When Anesthesiologist and Cardiologist Hold Hands</strong></p>
          <p><strong>Together</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(16.10 &ndash; 16..20)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>&nbsp;</strong></p>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>The Present Contributionsof Chest Pain Unit &ndash;</strong></p>
          <p><strong>CVCU :</strong></p>
          <p><em>Speaker : tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(16.20 &ndash; DONE)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Closing</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Closing</strong></p>
          </td>
          </tr>
          </tbody>
          </table></div>
          :
          ws=="KEDUA" ?
          <div>          <p><strong>&nbsp;</strong></p>

            <p style={{marginLeft:"30px",fontSize:"25px"}}><strong>DAY 2: Saturday, 11 December 2021</strong></p>
          <table style={{marginLeft:"30px"}}>
          <tbody>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>TIME</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>SESSION</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>SESSION</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>Warm-Up </strong><strong>Session</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>CARDIOMETABOLIC SESSION</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ACUTE HEART FAILURE</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(08.00 &ndash; 08.20)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Diabetes Mellitus and Cardiovascular Outcome</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Door to Furosemide Time</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(08.20 &ndash; 08.40)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>The Metabolic Milieu in Diabetes Mellitus</strong></p>
          <p><em>Speaker:tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Help! I Can&rsquo;t Get The Fluids Out!</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(08.40 &ndash; 09.00)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cardiometabolic Drugs</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Failure of The Right-Sided Heart</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.00 &ndash; 09.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Morning Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>PLENARY: CARDIO-ONCOLOGY- </strong><strong>IMMUNOLOGY</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>PREVENTION AND REHABILITATION</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.10 &ndash; 09.30)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How The Heart is Affected?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Preventing Coronary Artery Disease through Lifestyle Modification</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.30 &ndash; 09.50)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Renal Ca: A-Z</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Physical Activity as Protection of Metabolic and Immunological Functions</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.50 &ndash; 10.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Pulmonary Ca: A-Z</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cardiovascular Rehabilitation: Current Practice and its Application during Pandemic</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(10.10 &ndash; 10.30)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Breast Cancer</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Sports Recommendations in Heart Failure</strong></p>
          <p><strong>Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(10.30 &ndash; 10.50)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Lymphoma</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Sports Recommendations in Coronary Artery Disease Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(10.50 &ndash; 11.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>BPJS: Rule and Regulations of Chemotherapy</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Sports Recommendations in Permanent Pacemaker Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(11.10 &ndash; 11.30)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Mid-Day Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>IN-DEPTH SESSION IN CARDIO-ONCOLOGY</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ECHOCARDIOGRAPHY SESSION: LUNG ULTRASOUND IN THE DAILY USE</strong></p>
          <p><em>Chairman: tba</em></p>
          <p><em>Panelist:</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(11.35 &ndash; 11.55)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Echocardiography and HS-Troponin Evaluation</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Seeing is Believing: The Next Handled </strong><strong>Diagnostic Tool</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(11.55 &ndash; 12.15)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Thrombus Burden Among Oncology Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Differentiating The Etiologies and Coexistence</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(12.15 &ndash; 12.35)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Anti-Thrombotic Use in Cardio-Oncology Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Lung Ultrasound (from Cardiologist Point of </strong><strong>View)</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(12.35 &ndash; 12.55)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cardiotoxic Regiments: What to Do?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Lung Ultrasound (from Pulmonologist Point of </strong><strong>View)</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(12.55 &ndash; 13.05)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          </tbody>
          </table>
          <p>&nbsp;</p>
          <p><strong>&nbsp;</strong></p>
          <table style={{marginLeft:"30px"}}>
          <tbody>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Lunch Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ACUTE ISCHEMIC STROKE: THE ROLE OF </strong><strong>CARDIOLOGIST</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>CORONARY INTERVENTION</strong></p>
          <p><em>Chairman: tba </em><em>Panelist tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(13.05 &ndash; 13.25)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Types of Ischemic Stroke and The Role of Anti- Thrombotics</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Anatomical vs Functional PCI (in The Current Appropriateness Era)</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(13.25 &ndash; 13.45)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cardiac Monitoring After Ischemic Stroke: Evidence and Clinical Practice</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Left Main PCI vs By-Pass Surgery</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(13.45 &ndash; 14.05)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How Anti-Coagulation be Given in Embolic </strong><strong>Stroke?Bridging</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Chest Pain After PCI: What are The Possible Differential Diagnosis?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(14.05 &ndash; 14.25)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Blood Pressure Control in Acute Ischemic Stroke</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Anti-Thrombotic Drugs in Elective PCI</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(14.25 &ndash; 14.30)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>Afternoon Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ALL ABOUT STATINS</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>OUR BETA-BLOCKERS OF CHOICE</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(14.35 &ndash; 14.55)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>High Intensity Statins and Its Pleiomorphic Effects</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cardioselectivity in Betablockers</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(14.55 &ndash; 15.15)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>The Sooner, The Better</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Beta-blockers in Pregnancy : When and Which </strong><strong>is the safest</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(15.15 &ndash; 15.35)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Hard End-Points During Hospitalization: Should We Adjust The Dose?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>IV Metoprolol in Hypertensive Emergency</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(15.35 &ndash; 15.55)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Statin Toxicity and Nocebo Effects</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Metoprolol in Acute MI</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(15.55 &ndash; 16.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(16.10 &ndash; DONE)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Closing</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Closing</strong></p>
          </td>
          </tr>
          </tbody>
          </table>
          <p>&nbsp;</p></div>
          : ws=="KETIGA" ?
          <div>          <p><strong>&nbsp;</strong></p><p style={{marginLeft:"30px",fontSize:"25px"}}><strong>DAY 3: Sunday, 12 December 2021</strong></p>
          <table style={{marginLeft:"30px"}}>
          <tbody>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>TIME</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>SESSION</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>SESSION</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Warm-Up Session</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>EVALUATION OF CORONARY</strong></p>
          <p><strong>SYNDROME BY CARDIAC IMAGING</strong></p>
          <p><em>Chairman: Serahkan Imaging </em><em>Panelist:</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Acute Cardiac Care&ndash; 2: PPCI BY THE EXPERTS</strong></p>
          <p><em>Chairman: Dr Evit SpJP </em><em>Panelist:</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(08.00 &ndash; 08.20)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Plaque Imaging is The Beauty of Cardiac CT</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Sequences Before Treating The Lesion (Access,</strong></p>
          <p><strong>Guiding, DCA, GW)</strong></p>
          <p><em>Speaker: Dr</em> <em>Yusuf Suseno</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(08.20 &ndash; 08.40)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Implementation of New CCS Guidelines in</strong></p>
          <p><strong>Cardiac CT</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Thrombus Aspiration: How Should It be Performed,</strong></p>
          <p><strong>When to Avoid and Stop</strong></p>
          <p><em>Speaker: Dr Samuel SpJP</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(08.40 &ndash; 09.00)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Functional Test by Cardiac MR</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Stenting: Direct/Defer/Pre-dilatation and stent of </strong><strong>choice</strong></p>
          <p><em>Speaker:Dr Bambang Makssar, SpJP</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.00 &ndash; 09.20)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Utilization of Cardiac MR in Coronary Heart </strong><strong>Disease</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Preventive Non-IRA Stenting</strong></p>
          <p><em>Speaker:Dr Christian/Dr Hendri</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.20 &ndash; 09.40)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Dobutamin Stress Echo Step by Step</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cases of Complex PPCI: The Role of Imaging &amp;</strong></p>
          <p><strong>Functional test</strong></p>
          <p><em>Speaker: Dr Fauzi</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(09.40 &ndash; 09.50)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Morning Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ELECTROPHYSIOLOGY SESSION - 1</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Some Laboratory Findings in COVID-19: What The</strong></p>
          <p><strong>Expert Says? &ndash; 2</strong></p>
          <p><em>Chairman: Dr Wisnu SpJP </em><em>Panelist:</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.55 &ndash; 10.15)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Sudden Cardiac Death (SCD) Prevention:</strong></p>
          <p><strong>When to Refer for ICD?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>HS-Troponin and Cardiac Injury</strong></p>
          <p><em>Speaker: Dr Daniel SpJP</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(10.15 &ndash; 10.35)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>NOAC in SPAF: A Practical Guideline</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>D</strong><em>-</em><strong>Dimer and Thrombosis Risks</strong></p>
          <p><em>Speaker: Prof Yusak</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(10.35 &ndash; 10.55)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>When to Implant Pacemaker in A Patient with</strong></p>
          <p><strong>Syncope?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Anti-Coagulation and Risk of Bleeding</strong></p>
          <p><em>Speaker: Dr Nadya SpJP</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(10.55 &ndash; 11.15)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>The Future of His Bundle Pacing</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Markers of Inflammation in Critically Ill COVID-19 </strong><strong>Patients</strong></p>
          <p><em>Speaker:Dr Wahyu SpAn</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(11.15 &ndash; 11.25)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Lunch Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ELECTROPHYSIOLOGY SESSION - 2</strong></p>
          <p><em>Chairman: tba</em></p>
          <p><em>Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ACUTE CARDIAC CARE &ndash; 2</strong></p>
          <p><em>Chairman: Dr Aan</em></p>
          <p><em>Panelist:</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(11.30 &ndash; 11.50)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>My Patient Has A Multiple PVC: What to Do </strong><strong>Next?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Hyperglycemia in Acute Heart Failure: Internist Cardiologist Perspective</strong></p>
          <p><em>Speaker: Dr Yongki SpPD</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(11.50 &ndash; 12.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Living Together with Arrythmia</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Pneumonia in Acute Heart Failure: A Very Common</strong></p>
          <p><strong>Co-Existing Finding</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(12.10 &ndash; 12.30)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>PPM Evaluation, PIP Recommendation, PVC and PAC burden</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Acute Kidney Injury and Dilemmatic Renal Shut Down in Acute Heart Failure: The Detailed Attempts</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(12.30 &ndash; 12.50)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>AF: From CC to ABC</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Electrolyte Imbalance in Acute Heart Failure: Potassium &amp; Magnesium</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(12.50 &ndash; 13.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Syncope Evaluation</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Fluid and Nutrition in Cardiac Intensive Care Patients</strong></p>
          </td>
          </tr>
          </tbody>
          </table>
          <p>&nbsp;</p>
          <p><strong>&nbsp;</strong></p>
          <table style={{marginLeft:"30px"}}>
          <tbody>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>&nbsp;</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(13.10 &ndash; 13.20)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Afternoon Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ADULT WITH CONGENITAL HEART DISEASE DURING COVID-19 PANDEMIC</strong></p>
          <p><strong>ARE THEY REALLY AT RISK?</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>CARDIOMYOPATHY : How the Cardiologist Handle it (multiple etiology)</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(13.25 &ndash; 13.45)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Adult with Congenital Heart Disease Risk</strong></p>
          <p><strong>Stratification for Complication in Covid-19</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ICM : Proven Intervention and Drugs</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(13.45 &ndash; 14.05)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Acute Respiratory Distress Syndrome (ARDS)</strong></p>
          <p><strong>in Covid-19 Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>DCM : Etiologies do matters</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(14.05 &ndash; 14.25)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Vaccine in Adult Congenital Heart Disease </strong><strong>Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Sepsis &amp; Covid Induced CM : How often and what&rsquo;ve </strong><strong>we learned ?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(14.25 &ndash; 14.45)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p>&nbsp;</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ICD &amp; CRT : Risk Benefit &amp; Convenience</strong></p>
          <p><em>Speaker : tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(14.45 &ndash; 15.05)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p>&nbsp;</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>PPCM :Proven drugs and long term monitoring</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(15.05 &ndash; 15.15)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(15.25 &ndash; 15.35)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Closing</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Closing</strong></p>
          </td>
          </tr>
          </tbody>
          </table>
          <p>&nbsp;</p></div>
            :
            ws=="1" ?
            <div><p><strong>&nbsp;</strong></p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Workshop 1</p>
            </td>
            <td colspan="2" width="496" style={{marginLeft:"15px"}}>
            <p>For Cardiologist, Obstetricians and Gynecologist</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Topic</p>
            </td>
            <td colspan="2" width="496" style={{marginLeft:"15px"}}>
            <p>Pregnancy and Heart Disease: What is the Most Common Cardiovascular Problem on It?</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Day, date</p>
            </td>
            <td colspan="2" width="496" style={{marginLeft:"15px"}}>
            <p>Saturday, November 27<sup>th</sup> , 07.30 &ndash; 11.30</p>
            <p>WIB</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Course Director</p>
            </td>
            <td colspan="2" width="496" style={{marginLeft:"15px"}}>
            <p>Alisia Yuana Putri, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>PIC</p>
            </td>
            <td colspan="2" width="496" style={{marginLeft:"15px"}}>
            <p>Irma Maghfirah, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Moderator</p>
            </td>
            <td colspan="2" width="496" style={{marginLeft:"15px"}}>
            <p>Alisia Yuana Putri, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Time</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Topic</p>
            </td>
            <td width="211">
            <p>Speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>07.30 &ndash; 08.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Registrasi</p>
            </td>
            <td width="211">
            <p>PIC &amp; Committee</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.00 - 08.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Opening by Moderator</p>
            <p>Welcome speech by Course Director</p>
            </td>
            <td width="211">
            <p>Dr. Alisia Yuana Putri, Sp.JP</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>8.10-8.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>What the OBG/YN need to know from</p>
            <p>Cardiologist? : The Sacred Question</p>
            </td>
            <td width="211">
            <p>Dr. Manggala Sp.OG (Surabaya)</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>8.30-8.50</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>From HT in Pregnancy into Pre-Eclampsia and Pulmonary Edema in Pregnancy: How to Choose</p>
            <p>the Safest Cardiovascular Drugs?</p>
            </td>
            <td width="211">
            <p>Dr. Alisia Yuana Putri SpJP (Surabaya)</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>8.50-9.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Pregnant Woman with Arrythmia Problems:</p>
            <p>Multiple PVC and SVT, is it Dangerous? When Holter Should be Considered?</p>
            </td>
            <td width="211">
            <p>Dr. Hauda SpJP (Padang)</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>9.10-9.40</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Case interactive</p>
            </td>
            <td width="211">
            <p>Dr. Irma Maghfirah SpJP</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>9.40-9.55</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Break</p>
            </td>
            <td width="211">
            <p>Panitia</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>9.55-10.15</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Fetal Dysrhythmia: What Cardiologist Should Know?</p>
            </td>
            <td width="211">
            <p>Dr. Erika Maharani SpJP (Yogyakarta)</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>10.15-10.35</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Dyspnea while Pregnant, When We Need to be Aware? : ECHO hands on Evaluate the Mother&rsquo;s Heart</p>
            </td>
            <td width="211">
            <p>Dr. Melawati Hasan SpJP (Bandung)</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>10.35-11.15</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Case interactive (2)</p>
            </td>
            <td width="211">
            <p>Dr. Alisia Yuana Putri, Sp.JP</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>11.15-11.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Closing by Moderator Quiz</p>
            <p>Questionnaire Doorprize</p>
            <p>Photo session</p>
            </td>
            <td width="211">
            <p>Dr. Irma Maghfirah, Sp.JP</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            :
            ws=="2" ?
            <div><p><strong>&nbsp;</strong></p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Workshop 2</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>For Cardiologist</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Topic</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Perioperative Cardiac Consultation</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Day, date</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Saturday, November 27<sup>th</sup> 2021 , Pk 12.30 - 15.30WIB</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Course Director</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Christian Pramudita B., MD,FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>PIC</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>-</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Moderator</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Christian Pramudita B., MD,FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Time</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Topic</p>
            </td>
            <td width="203">
            <p>Speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>12.30 &ndash; 13.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Registration</p>
            </td>
            <td width="203">
            <p>PIC &amp; Committee</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.00-13.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Opening by Moderator</p>
            <p>Welcome speech by Course Director</p>
            </td>
            <td width="203">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.10 - 13.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Anesthesia and Cardiac Perioperative Care</p>
            </td>
            <td width="203">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.30 - 13.50</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Detecting Unstable Cardiac Condition</p>
            </td>
            <td width="203">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.50 &ndash; 14.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Perioperative Cardiac Rhythm Disturbance</p>
            </td>
            <td width="203">
            <p>Rerdin Julario. MD,FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>14.10 - 14.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Antiplatelet and Anticoagulation in Perioperative Periods</p>
            </td>
            <td width="203">
            <p>Yudi Her Oktaviono , MD, PhD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>14.30 -15.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Discussion</p>
            </td>
            <td width="203">
            <p>All speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>15.10 -15.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Closing by Moderator</p>
            <p>Kuis Kuesioner Doorprize</p>
            <p>Photo session</p>
            </td>
            <td width="203">
            <p>Christian Pramudita B., MD,FIHA</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            :
            ws=="3" ?
            <div><p><strong>&nbsp;</strong></p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Workshop 3</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>For General Practitioner, Cardiologist, Physiotherapist, Nurse, other Specialists</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Topic</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Stay Fit, Don't Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Day, date</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Sunday, November 28<sup>th</sup> 2021, 07.30 &ndash; 10.30 WIB</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Course Director</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Dyana Sarvasti, MD, PhD</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>PIC</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Arisya Agita, MD</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Time</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Topic</p>
            </td>
            <td width="203">
            <p>Speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>07.30 &ndash; 08.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Registration</p>
            </td>
            <td width="203">
            <p>PIC &amp; Committee</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.00 - 08.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Opening by Moderator</p>
            <p>Welcome speech by Course Director</p>
            </td>
            <td width="203">
            <p>Moderator</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.10 &ndash; 08.40</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>The practical impacts of exercise prescription for coronary artery disease patients on Covid-19</p>
            <p>pandemic</p>
            </td>
            <td width="203">
            <p>Dyana Sarvasti, MD, PhD</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.40 &ndash; 09.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Exercise programsfor heart failure patient in the</p>
            <p>time of Covid-19</p>
            </td>
            <td width="203">
            <p>Basuni Radi, MD, PhD</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>09.10 &ndash; 09.40</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Don't stop walking: Exercise programs for</p>
            <p>peripheral artery disease patients during the Covid-19 Pandemic</p>
            </td>
            <td width="203">
            <p>Meity Ardiana, MD, PhD</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>09.40 &ndash; 10.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Case interactive and discussion</p>
            </td>
            <td width="203">
            <p>All Speakers and Moderator</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>10.10-10.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Closing by Moderator Quiz</p>
            <p>Questionnaire</p>
            <p>Doorprize Photo session</p>
            </td>
            <td width="203">
            <p>Arisya Agita, MD</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            :
            ws=="4" ?
            <div>4</div>
            :
            ws=="5" ?
            <div><p><strong>&nbsp;</strong></p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Workshop 5</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>For General Practitioner, Cardiologist</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Topic</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>AF Management in the ER, Consultant Cardiologist do their jobs</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Day, Date</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Saturday, December 4<sup>th</sup> 2021, 07.30 &ndash; 11.00 WIB</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Course Director</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>dr. Farhanah Meutia, SpJP (K)</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>PIC</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Dr. Vianney Tedjamulai, Sp. Biomed., Sp.JP</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Moderator</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>dr. Farhanah Meutia, SpJP (K)</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Time</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Topic</p>
            </td>
            <td width="203">
            <p>Speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>07.30 &ndash; 08.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Registrasi</p>
            </td>
            <td width="203">
            <p>PIC &amp; Committee</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.00 - 08.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Opening by Moderator</p>
            <p>Welcome speech by Course Director</p>
            </td>
            <td width="203">
            <p>Farhanah Meutia, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>8. 10 &ndash; 9.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>The underlying causes of atrial fibrillation with</p>
            <p>rapid ventricular response</p>
            </td>
            <td width="203">
            <p>Andrianto, MD, PhD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>9.00 &ndash; 9.50</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>The principles of emergency management of atrial</p>
            <p>fibrillation, beyond the guidelines.</p>
            </td>
            <td width="203">
            <p>Mochamad Yusuf, MD, PhD,</p>
            <p>FIHA, FESC</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>9.50 &ndash; 10.40</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Deeper insight of pharmacological agent for emergency ventricular rate control and</p>
            <p>cardioversion</p>
            </td>
            <td width="203">
            <p>Tri Astiawati, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>10.40 &ndash; 11.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Closing by Moderator</p>
            <p>Quiz Questionnaire Doorprize</p>
            <p>Photo session</p>
            </td>
            <td width="203">
            <p>Vianney Tedjamulai, MD, FIHA</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            :
            ws=="6" ?
            <div><p><strong>&nbsp;</strong></p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Workshop 6</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>For General Practitioner, Cardiologist</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Topic</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Cardiovascular Evaluation in Hajj Pilgrim</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Day, date</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Saturday, 4<sup>th</sup> December 2021 , 12.30 &ndash; 16.00 WIB</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Course Director</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Anindita P. Q, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>PIC</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Lenny Kartika S, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Moderator</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Anindita P. Q, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Time</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Topic</p>
            </td>
            <td width="203">
            <p>Speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>12.30 &ndash; 13.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Registrasi</p>
            </td>
            <td width="203">
            <p>PIC &amp; Committee</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.00-13.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Opening by Moderator</p>
            <p>Welcome speech by Course Director</p>
            </td>
            <td width="203">
            <p>Anindita P. Q, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.10-13.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>How screening should be performed</p>
            </td>
            <td width="203">
            <p>-</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.30-13.50</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>The Role of Cardiac Stress Test</p>
            </td>
            <td width="203">
            <p>Cholid Tri Tjahjono, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.50-14.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>How HF patient should be optimized</p>
            </td>
            <td width="203">
            <p>Susetyo Atmojo, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>14.10-14.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>How CAD should be evaluated</p>
            </td>
            <td width="203">
            <p>Richardus Rukma Juslim, MD,</p>
            <p>FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>14.30-15.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Most common emergency Acute CV Care during</p>
            <p>Hajj</p>
            </td>
            <td width="203">
            <p>Mirvat Alasnag, MD</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>15.00-15.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Most common cardiac sign &amp; symptoms during</p>
            <p>hajj and its recommendation</p>
            </td>
            <td width="203">
            <p>Faisal, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>15.30-15.45</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Discussion</p>
            </td>
            <td width="203">
            <p>Anindita P. Q, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>15.45-16.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Closing by Moderator Quiz</p>
            <p>Questionnaire Doorprize Photo session</p>
            </td>
            <td width="203">
            <p>Lenny Kartika S, MD, FIHA</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            :
            ws=="7" ?
            <div>7</div>
            :
            ws=="8" ?
            <div><p><strong>&nbsp;</strong></p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Workshop 8</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>For Cardiologist</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Topic</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Practical approach to non-invasive ventilation in acute heart failure</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Day, Date</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Sunday, December 5<sup>th</sup> 2021, 12.30 &ndash; 16.35 WIB</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Course Director</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Hendri Susilo, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>PIC</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>-</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Moderator</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Hendri Susilo, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Time</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Topic</p>
            </td>
            <td width="203">
            <p>Speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>12.30 - 13.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Registration</p>
            </td>
            <td width="203">
            <p>PIC &amp; Committee</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.00 - 13.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Opening by Moderator</p>
            <p>Welcome speech by Course Director</p>
            </td>
            <td width="203">
            <p>Hendri Susilo, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.10 - 13.50</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Basic Principles of Noninvasive Ventilation in Acute Heart Failure: Indications,</p>
            <p>Contraindications, dan Modalities</p>
            </td>
            <td width="203">
            <p>Dian Zamroni, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.50 -14.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Initial Setting of Noninvasive Ventilation: HFNC,</p>
            <p>CPAP, BIPAP</p>
            </td>
            <td width="203">
            <p>Triwedya Indra Dewi, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>14.30 -15.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Monitoring and Weaning of Noninvasive</p>
            <p>Ventilation: Reassessment of Clinical Improvement</p>
            </td>
            <td width="203">
            <p>Farhanah Meutia, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>15.10 -15.50</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Case presentations and simulations: The role of</p>
            <p>NIV in Acte HF</p>
            </td>
            <td width="203">
            <p>Akhtar Fajar Muzakir, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>15.50 -16.20</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Discussion</p>
            </td>
            <td width="203">
            <p>Hendri Susilo, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>16.20 -16.35</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Closing by Moderator</p>
            <p>Quiz Questionnaire Doorprize Photo session</p>
            </td>
            <td width="203">
            <p>Hendri Susilo, MD, FIHA</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            :
            ws=="9" ?
            <div><p><strong>&nbsp;</strong></p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Workshop 9</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>For GP, other specialists</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Topic</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Practical Approach in Emergency Arrythmias</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Day, date</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Friday, 10 December 2021, 07.30 &ndash; 11.15 WIB</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Course Director</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Anna Budiarti, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>PIC</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Windu Prima, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Moderator</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Anna Budiarti, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Time</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Topic</p>
            </td>
            <td width="203">
            <p>Speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>07.30 - 08.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Administration</p>
            </td>
            <td width="203">
            <p>PIC &amp; Committee</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.00 - 08.15</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Opening by Moderator</p>
            <p>Welcome speech by Course Director</p>
            </td>
            <td width="203">
            <p>Windu Prima, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.15 - 08.40</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Management of Arrhythmic Patients in the</p>
            <p>Emergency Department: General Principles</p>
            </td>
            <td width="203">
            <p>M. Rafdi Amadis, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.40 - 09.05</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Management of Bradyarrhythmias in Emergency</p>
            </td>
            <td width="203">
            <p>Ragil Nur Rosyadi, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>09.05 - 09.15</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Discussion (QnA)</p>
            </td>
            <td width="203">
            <p>All speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>09.15 - 09.40</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Supraventricular Arrhythmias in Emergency</p>
            </td>
            <td width="203">
            <p>Anna Budiarti, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>09.40 - 10.05</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Atrial Flutter and Fibrillation in the Emergency</p>
            <p>Setting</p>
            </td>
            <td width="203">
            <p>Budi Baktijasa, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>10.05 - 10.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Wide QRS Complex Tachycardia in the</p>
            <p>Emergency Setting</p>
            </td>
            <td width="203">
            <p>Rerdin Julario, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>10.30 - 10.50</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Case Interactive : Bradicardia Symptomatic and</p>
            <p>Life Threatening Arrhythmias</p>
            </td>
            <td width="203">
            <p>Windu Prima, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>10.50 - 11.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Discussion (QnA)</p>
            </td>
            <td width="203">
            <p>All speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>11.00 - 11.15</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Closing by Moderator Quiz</p>
            <p>Questionnaire Doorprize</p>
            <p>Photo session</p>
            </td>
            <td width="203">
            <p>Windu Prima, MD, FIHA</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            :
            ws=="10" ?
            <div><p><strong>&nbsp;</strong></p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Workshop 10</p>
            </td>
            <td colspan="2" width="539">
            <p>Untuk GP, Nurse</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Topik</p>
            </td>
            <td colspan="2" width="539">
            <p>Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskular di Lini Terdepan: Fokus pada</p>
            <p>Terapi Trombolitik</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Hari, Tanggal</p>
            </td>
            <td colspan="2" width="539">
            <p>Jumat, 10 Desember 2021, 12.30 &ndash; 16.00 WIB</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Course Director</p>
            </td>
            <td colspan="2" width="539">
            <p>Hendri Susilo, dr., Sp.JP.</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>PIC</p>
            </td>
            <td colspan="2" width="539">
            <p>Liemena Harold A., dr., Sp.JP</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Moderator</p>
            </td>
            <td colspan="2" width="539">
            <p>R. Endang Herlianingsih, S.Kep., Ns., MM</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Waktu</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Topik</p>
            </td>
            <td width="255">
            <p>Pembicara</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>12.30 &ndash; 13.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Registrasi</p>
            </td>
            <td width="255">
            <p>PIC &amp; Panitia</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.00 &ndash; 13.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Opening by Moderator</p>
            <p>Welcome speech and workshop overview by Course Director</p>
            <p>Pre-test</p>
            </td>
            <td width="255">
            <p>R. Endang Herlianingsih, S.Kep., Ns., MM</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.10 &ndash; 13.40</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Memilih pasien yang tepat untuk trombolisis: indikasi, kontraindikasi, dan informasi pasien</p>
            </td>
            <td width="255">
            <p>Hendri Susilo, dr., Sp.JP</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.40 &ndash; 14.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Persiapan, pemberian, dan pemantauan</p>
            <p>trombolisis: persiapan terbaik dan waspadai komplikasinya</p>
            </td>
            <td width="255">
            <p>Aang Kunaefi, S.Kep., Ns., M.Kep.</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>14.10 &ndash; 14.40</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Manajemen komplikasi (<em>adverse event</em>) selama dan pasca pemberian trombolisis</p>
            </td>
            <td width="255">
            <p>Christian Pramudhita, dr., Sp.JP</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>14.40 &ndash; 15.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Menilai keberhasilan trombolisis dan peran</p>
            <p>pemberian ko-terapi antitrombotik</p>
            </td>
            <td width="255">
            <p>Liemena Harold Adrian, dr., Sp.JP</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>15.10 &ndash; 15.40</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Presentasikasus</p>
            <p>Diskusi</p>
            </td>
            <td width="255">
            <p>Liemena Harold Adrian, dr., Sp.JP</p>
            <p>Semua Pembicara</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>15.40 &ndash; 16.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Closingby Moderator</p>
            <p>Post-test Kuesioner Doorprize</p>
            <p>Sesi foto bersama</p>
            </td>
            <td width="255">
            <p>R. Endang Herlianingsih, S.Kep., Ns., MM</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            :
            ws=="11" ?
            <div><p><strong>&nbsp;</strong></p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Workshop 11</p>
            </td>
            <td colspan="2" width="532">
            <p>For GP, Radiologist, Anesthesiologist</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Topic</p>
            </td>
            <td colspan="2" width="532">
            <p>Rapid Echocardiography in Emergency Setting</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Day, date</p>
            </td>
            <td colspan="2" width="532">
            <p>Saturday, 11 December 2021, 07.30 &ndash; 11.00 WIB</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Course Director</p>
            </td>
            <td colspan="2" width="532">
            <p>Ruthvi Adriana, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>PIC</p>
            </td>
            <td colspan="2" width="532">
            <p>Deasy Eka Wardhani, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Moderator</p>
            </td>
            <td colspan="2" width="532">
            <p>Deasy Eka Wardhani, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Time</p>
            </td>
            <td width="345">
            <p>Topic</p>
            </td>
            <td width="187">
            <p>Speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>07.30 &ndash; 08.00</p>
            </td>
            <td width="345">
            <p>Administration</p>
            </td>
            <td width="187">
            <p>PIC &amp; Committee</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.00 &ndash; 08.10</p>
            </td>
            <td width="345">
            <p>Opening by Moderator</p>
            <p>Welcome speech by Course Director</p>
            </td>
            <td width="187">
            <p>Deasy Eka Wardhani, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.10 &ndash; 08.25</p>
            </td>
            <td width="345">
            <p>Cardiac Anatomy (chambers, valve, myocardium), Coronary</p>
            <p>Artery, and Pericardium</p>
            </td>
            <td width="187">
            <p>Ruthvi Adriana, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.25&ndash; 08.40</p>
            </td>
            <td width="345">
            <p>Pathophysiology of Heart Failure</p>
            </td>
            <td width="187">
            <p>Suryono, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.40&ndash; 08.55</p>
            </td>
            <td width="345">
            <p>Basic Echocardiography (2D and M Mode Evaluation)</p>
            </td>
            <td width="187">
            <p>Ari Rahmawati, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.55&ndash; 09.15</p>
            </td>
            <td width="345">
            <p>Demo 2D (PLAX, PSAX, A4C, A2C, A5C), M Mode</p>
            <p>(Video)</p>
            </td>
            <td width="187">
            <p>All speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>09.15&ndash; 09.25</p>
            </td>
            <td width="345">
            <p>Discussion</p>
            </td>
            <td width="187">
            <p>All speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>09.25- 09.40</p>
            </td>
            <td width="345">
            <p>Lung Echo</p>
            </td>
            <td width="187">
            <p>Sany R.Siswardana, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>09.40-10.00</p>
            </td>
            <td width="345">
            <p>Demo Sub Xyphoid and Lung Ultrasound (video)</p>
            </td>
            <td width="187">
            <p>All speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>10.00- 10.45</p>
            </td>
            <td width="345">
            <p>Case Study</p>
            </td>
            <td width="187">
            <p>Rosi Amrilla Fagi, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>10.45 &ndash; 11.00</p>
            </td>
            <td width="345">
            <p>Closing by Moderator Quiz</p>
            <p>Questionnaire</p>
            <p>Doorprize Photo session</p>
            </td>
            <td width="187">
            <p>Deasy Eka Wardhani, MD, FIHA</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            :
            ws=="12" ?
            <div><p><strong>&nbsp;</strong></p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Workshop 12</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>For Cardiologist</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Topic</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Day, date</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Saturday, December 11<sup>th</sup> 2021, Pk 07.30 &ndash; 11.30 WIB</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Course Director</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Anudya Kartika Ratri, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>PIC</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Anudya Kartika Ratri, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Moderator</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Anudya Kartika Ratri, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Time</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Topic</p>
            </td>
            <td width="203">
            <p>Speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>07.30 &ndash; 08.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Registrasi</p>
            </td>
            <td width="203">
            <p>PIC &amp; Committee</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.00 - 08.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Opening by Moderator</p>
            <p>Welcome speech by Course Director</p>
            </td>
            <td width="203">
            <p>Anudya Kartika Ratri, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>8.10-8.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Sequential Approach for Congenital Heart Disease Echocardiography</p>
            <p><em>Dr. dr. Mahrus A. Rahman SpA(K)</em></p>
            <p>(materi 15 menit, diskusi 5 menit)</p>
            </td>
            <td width="203">
            <p>Mahrus A. Rahman, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>8.30-8.50</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Echocardiographic Evaluation in VSD : Defect Size and Morphology</p>
            <p><em>dr. Agus Subagjo SpJP(K)</em></p>
            <p>(materi 15 menit, diskusi 5 menit)</p>
            </td>
            <td width="203">
            <p>Agus Subagjo, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>8.50-9.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Case Interactive-Discussion</p>
            </td>
            <td width="203">
            <p>-</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>9.30-9.45</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Break</p>
            </td>
            <td width="203">
            <p>Committee</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>9.45-10.05</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Echocardiographyin TOF : Practice Essentials</p>
            <p><em>dr. Poppy S. Roebiono SpJP(K)</em></p>
            <p>(materi 15 menit, diskusi 5 menit)</p>
            </td>
            <td width="203">
            <p>Poppy S. Roebiono, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>10.05-10.25</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Right and Left Heart Catheterization Pearls in CHD (Shunt quantificationand Hemodynamic Measurement)</p>
            <p><em>dr. Radityo Prakoso SpJP(K)</em></p>
            <p>(materi 15 menit, diskusi 5 menit)</p>
            </td>
            <td width="203">
            <p>Radityo Prakoso, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>10.25-11.05</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Case Interactive-Discussion</p>
            </td>
            <td width="203">
            <p>-</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>11.05-11.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Closing by Moderator Quiz</p>
            <p>Questionnaire Doorprize Photo session</p>
            </td>
            <td width="203">
            <p>Anudya Kartika Ratri, MD, FIHA</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            :
            ws=="13" ?
            <div><p><strong>&nbsp;</strong></p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Workshop 13</p>
            </td>
            <td colspan="2" width="515">
            <p>For GP, other specialists</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Topic</p>
            </td>
            <td colspan="2" width="515">
            <p>Advanced in Diagnosing Acute Heart Failure</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Day, date</p>
            </td>
            <td colspan="2" width="515">
            <p>Saturday, December 11<sup>th</sup> 2021, 12.30 &ndash; 16.00 WIB</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Course Director</p>
            </td>
            <td colspan="2" width="515">
            <p>Christian Pramudita B., MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>PIC</p>
            </td>
            <td colspan="2" width="515">
            <p>Windu Prima, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Time</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Topic</p>
            </td>
            <td width="231">
            <p>Speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>12.30 &ndash; 13.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Registration</p>
            </td>
            <td width="231">
            <p>PIC &amp; Committee</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.00-13.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Opening by Moderator</p>
            <p>Welcome speech by Course Director</p>
            </td>
            <td width="231">
            <p>Christian Pramudita B., MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.10-13.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Universal Definition and Classification of Heart Failure</p>
            <p>(Usul: Devie Caroline., dr., Sp.JP, FIHA)</p>
            </td>
            <td width="231">
            <p>Devie Caroline., MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.30-13.50</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Heart Failure: Pathophysiology From Acute to</p>
            <p>Chronic</p>
            <p>(Usul: Ahmad Surya Darma, dr., Sp.JP, FIHA)</p>
            </td>
            <td width="231">
            <p>Ahmad Surya Darma, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.50-14.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Principal Therapy of Acute Heart Failure Usul: Nia Dyah, dr., Sp,JP, FIHA)</p>
            </td>
            <td width="231">
            <p>Nia Dyah, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>14.10-14.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Management of Cardiogenic Shock</p>
            <p>(Usul: Muhammad Perdana Airlangga dr., Sp.JP, FIHA)</p>
            </td>
            <td width="231">
            <p>Muhammad Perdana Airlangga, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>14.30 &ndash; 15.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Interactive Case:</p>
            <p>(Usul: Christian Pramudita B., dr., Sp.JP)</p>
            </td>
            <td width="231">
            <p>Christian Pramudita B., MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>15.10 &ndash; 15.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Discussion</p>
            </td>
            <td width="231">
            <p>Moderator</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>15.30 &ndash; 16.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Closing by Moderator Quiz</p>
            <p>Questionnaire Doorprize</p>
            <p>Photo session</p>
            </td>
            <td width="231">
            <p>Windu Prima, MD, FIHA</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            :
            ws=="14" ?
            <div><p><strong>&nbsp;</strong></p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Workshop 14</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>For Interventional Cardiologists, General Cardiologists</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Topic</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>How to Deal with Heavy Coronary Calcified Lesion in PCI?</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Day, date</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Saturday, 5 December 2021, 12.30 &ndash; 16.25 WIB</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Course Director</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Aldhi Pradana H, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>PIC</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Suryo Ardi Hutomo, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Moderator</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Suryo Ardi Hutomo, MD, FIHA / Aldhi Pradana H, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Panelists</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>-Iswanto Pratanu</p>
            <p>-I Gde Rurus Surya wan</p>
            <p>-Doni Firman</p>
            <p>-Sodiqur Rifqi</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Time</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Topic</p>
            </td>
            <td width="203">
            <p>Speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>12.30 &ndash; 13.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Administration</p>
            </td>
            <td width="203">
            <p>PIC &amp; Committee</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.00-13.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Opening by Moderator</p>
            <p>Welcome speech by Course Director</p>
            </td>
            <td width="203">
            <p>Aldhi Pradana H, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.10-13.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Learning the Fundamental Aspects of Coronary Calcified Lesion</p>
            </td>
            <td width="203">
            <p>Yudi Her Oktaviono , MD, PhD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.30-13.50</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Intracoronary Imaging for Calcification Detection</p>
            <p>and Quantification</p>
            </td>
            <td width="203">
            <p>Amir Aziz Alkatiri, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.50-14.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>PCI Technique to beat Calcified Lesion: from</p>
            <p>lesion prepa ration to stent delivery</p>
            </td>
            <td width="203">
            <p>Teguh Santoso, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>14.10-14.40</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Discussion</p>
            </td>
            <td width="203">
            <p>Moderator</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>14.40-15.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Break</p>
            </td>
            <td width="203">
            <p>Committee</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>15.00-15.20</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Rotablation, when and how?</p>
            </td>
            <td width="203">
            <p>Muhammad Munawar, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>15.20-15.40</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Complications of Calcified Lesion PCI, Learning</p>
            <p>from Cases</p>
            </td>
            <td width="203">
            <p>dr. Samuel Sudanawidjaya, Sp.JP</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>15.40-16.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Discussion</p>
            </td>
            <td width="203">
            <p>Moderator</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>16.10-16.25</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Closing by Moderator Quiz</p>
            <p>Questionnaire Doorprize Photo session</p>
            </td>
            <td width="203">
            <p>Suryo Ardi Hutomo, MD, FIHA</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            :
            ws=="15" ?
            <div><p><strong>&nbsp;</strong></p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Workshop 15</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>For Cardiologist and Radiologist</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Topic</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Cardiomyopathy Evaluation by Cardiac MR</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Day, date</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Sunday, 12 December 2021, 07.30 &ndash; 11.15 WIB</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Course Director</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Saskia Dyah Handari, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>PIC</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Adityo B, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Moderator</p>
            </td>
            <td colspan="2" width="487" style={{paddingLeft:"15px"}}>
            <p>Rachfita C. G. D, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Time</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Topic</p>
            </td>
            <td width="203">
            <p>Speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>07.30-08.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Registration</p>
            </td>
            <td width="203">
            <p>PIC &amp; Committee</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.00-08.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Opening by Moderator</p>
            <p>Welcome speech by Course Director</p>
            </td>
            <td width="203">
            <p>Moderator</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.10-08.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Etiology of cardiomyopathy</p>
            </td>
            <td width="203">
            <p>Saskia Dyah Handari, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.30-08.50</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Clinical implication of fibrosis on EP study</p>
            </td>
            <td width="203">
            <p>Rerdin Julario, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>08.50-09.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Right heart dysfunction evaluation</p>
            </td>
            <td width="203">
            <p>Elen, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>09.10-09.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>T2 mapping, the new kids on the block in Cardiac</p>
            <p>MR</p>
            </td>
            <td width="203">
            <p>dr. Jay Ramchand, Cleveland</p>
            <p>Clinic, Ohio, USA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>9.30-11.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Case discussion</p>
            </td>
            <td width="203">
            <p>All Speakers and Moderator</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>11.00-11.15</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Closing by Moderator Quiz</p>
            <p>Questionnaire Doorprize Photo session</p>
            </td>
            <td width="203">
            <p>PIC</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            :
            ws=="16" ?
            <div><p><strong>&nbsp;</strong></p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Workshop 16</p>
            </td>
            <td colspan="2" width="539">
            <p>For Cardiologist and Radiologist</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Topic</p>
            </td>
            <td colspan="2" width="539">
            <p>Cardiac CT in Coronary Artery and Beyond</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Day, Date</p>
            </td>
            <td colspan="2" width="539">
            <p>Sunday, 12 December 2021, 12.30 &ndash; 16.15 WIB</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Course Director</p>
            </td>
            <td colspan="2" width="539">
            <p>Saskia Dyah Handari, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>PIC</p>
            </td>
            <td colspan="2" width="539">
            <p>Adityo B, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Moderator</p>
            </td>
            <td colspan="2" width="539">
            <p>Anna Fuji R, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>Time</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Topic</p>
            </td>
            <td width="255">
            <p>Speakers</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>12.30-13.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Registration</p>
            </td>
            <td width="255">
            <p>PIC &amp; Committee</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.00-13.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Opening by Moderator</p>
            <p>Welcome speech by Course Director</p>
            </td>
            <td width="255">
            <p>Anna Fuji R, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.10-13.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Calcium score as a screening tools</p>
            </td>
            <td width="255">
            <p>Endah Dewati K, MD, FIHA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.30-13.50</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>CT angiography post coronary procedur -</p>
            </td>
            <td width="255">
            <p>Prof Avijit Lahiri, Wellington Hospital,</p>
            <p>London, UK</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>13.50-14.10</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>CT aorta to peripheral</p>
            </td>
            <td width="255">
            <p>dr. Cindy Sadikin, Sp. Rad, Surabaya</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>14.10-14.30</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>CT for TAVI procedure</p>
            </td>
            <td width="255">
            <p>Prof. Paul Schoenhagen, Cleveland Clinic,</p>
            <p>Ohio, USA</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>14.30-16.00</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Case discussion</p>
            </td>
            <td width="255">
            <p>Moderator &amp; Speaker</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="146">
            <p>16.00-16.15</p>
            </td>
            <td width="284" style={{paddingLeft:"15px"}}>
            <p>Closing by Moderator Quiz</p>
            <p>Questionnaire Doorprize</p>
            <p>Photo session</p>
            </td>
            <td width="255">
            <p>PIC</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            :
            ws=="1A" ?
            <div><p>WORKSHOP I : Vein Disorders</p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p>Audience</p>
            </td>
            <td colspan="2" width="585">
            <p>Cardiologist</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p>Theme</p>
            </td>
            <td colspan="2" width="585">
            <p>Early Detection of Chronic Venous Insufficiency</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p>Day/Date</p>
            </td>
            <td colspan="2" width="585">
            <p>Friday, December 10, 2021</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p>PIC</p>
            </td>
            <td colspan="2" width="585">
            <p>dr. Novi Anggriyani, SpJP</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>Device</p>
            </td>
            <td colspan="2" width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>Sponsor</p>
            </td>
            <td colspan="2" width="70%">
            <p>Biolitec</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>Moderator</p>
            </td>
            <td colspan="2" width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p>TIME</p>
            </td>
            <td width="364">
            <p>TOPIK</p>
            </td>
            <td width="221">
            <p>SPEAKER</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>08.00-08.20</strong></p>
            </td>
            <td width="364">
            <p>Lower Extremity Veins Anatomy &amp; Pathophysiology in Chronic</p>
            <p>Venous Insufficiency</p>
            </td>
            <td width="221">
            <p>Novi Kurnianingsih, dr., Sp.JP(K)</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>08.20-08.40</strong></p>
            </td>
            <td width="364">
            <p>How to Identify, Stratify and Diagnosis Chronic Venous</p>
            <p>Insufficiency</p>
            </td>
            <td width="221">
            <p>Christine Anita, dr., Sp.JP</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>08.40-09.00</strong></p>
            </td>
            <td width="364">
            <p>Management of CVI with Lifestyle Modification, Medical &amp;</p>
            <p>Compression Therapy</p>
            </td>
            <td width="221">
            <p>Sidhi Laksono, Sp.JP</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>09.00-09.20</strong></p>
            </td>
            <td width="364">
            <p>Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>09.20-09.30</strong></p>
            </td>
            <td width="364">
            <p>Coffee Break</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p>&nbsp;</p>
            </td>
            <td width="364">
            <p>&nbsp;</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>09.30-09.50</strong></p>
            </td>
            <td width="364">
            <p>Modalities in Management in Chronic Venous Insufficiency: Focusing in the Safety and Efficacy of Endovenous Laser</p>
            <p>Ablation</p>
            </td>
            <td width="221">
            <p>Dr. J. Nugroho E. Putranto, dr., Sp.JP(K)</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>09.50-10.10</strong></p>
            </td>
            <td width="364">
            <p>What and How EVLT Works : From A to Z</p>
            </td>
            <td width="221">
            <p>Taofan, dr., Sp.JP(K)</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>10.10-10.30</strong></p>
            </td>
            <td width="364">
            <p>Case 1 : CVI Manageable with Lifestyle Modification &amp;</p>
            <p>Compression Therapy</p>
            </td>
            <td width="221">
            <p>Nurul Rahayuningrum, dr., Sp.JP(K)</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>10.30-10.50</strong></p>
            </td>
            <td width="364">
            <p>Case 2 : CVI with Complication of Venous Ulcer</p>
            </td>
            <td width="221">
            <p>Novi Anggriyani, dr., Sp.JP(K)</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>10.50-11.15</strong></p>
            </td>
            <td width="364">
            <p>Case 3 : EVLT in CVI with Accessories Veins as the Culprit</p>
            </td>
            <td width="221">
            <p>M. Reza J. Pasciolly, dr., Sp.JP(K)</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>11.15-11.45</strong></p>
            </td>
            <td width="364">
            <p>Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>11.45-13.00</strong></p>
            </td>
            <td width="364">
            <p>Lunch Break &amp; Friday Praying</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p>&nbsp;</p>
            </td>
            <td width="364">
            <p>&nbsp;</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>13.00-13.30</strong></p>
            </td>
            <td width="364">
            <p>How to prepare patient, operator and device (Video)</p>
            </td>
            <td width="221">
            <p>Suci Indriani, dr., SpJP(K)</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>13.30-14.00</strong></p>
            </td>
            <td width="364">
            <p>Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>14.00-14.30</strong></p>
            </td>
            <td width="364">
            <p>All about EVLT procedure</p>
            </td>
            <td width="221">
            <p>Vito A. Damay, dr., SpJP(K)</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>14.30-15.00</strong></p>
            </td>
            <td width="364">
            <p>Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>15.00-15.30</strong></p>
            </td>
            <td width="364">
            <p>All about post procedure EVLT</p>
            </td>
            <td width="221">
            <p>Novi Anggriyani, dr., Sp.JP(K)</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>15.30-16.00</strong></p>
            </td>
            <td width="364">
            <p>Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            :
            ws=="1B" ?
            <div><p>WORKSHOP 2 : VASCULAR DOPPLER ULTRASOUND</p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>Audience</p>
            </td>
            <td width="70%">
            <p>Cardiologist</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>Theme</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>Day / Date</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>PIC</p>
            </td>
            <td width="70%">
            <p>dr. Suci Indriani, SpJP</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>Device</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>Sponsor</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>Moderator</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>TIME</p>
            </td>
            <td width="35%">
            <p>TOPIK</p>
            </td>
            <td width="35%">
            <p>SPEAKER</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>08.00-08.10</strong></p>
            </td>
            <td width="364">
            <p>Re-registration, pretest</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>08.10-08.15</strong></p>
            </td>
            <td width="364">
            <p>Opening and Introduction</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>08.15-08.35</strong></p>
            </td>
            <td width="364">
            <p>Basic Principals of Vascular Doppler Ultrasound</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>08.35-08.55</strong></p>
            </td>
            <td width="364">
            <p>How to Diagnose Lower Peripheral Arterial Disease Using</p>
            <p>Doppler Ultrasound</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>08.55-09.15</strong></p>
            </td>
            <td width="364">
            <p>Evaluation Chronic Venous Insufficiency Using Doppler</p>
            <p>Ultrasound</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>09.15-09.35</strong></p>
            </td>
            <td width="364">
            <p>Deep Vein vs Superficial Vein Thrombosis</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>09.35-10.05</strong></p>
            </td>
            <td width="364">
            <p>Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>10.05-10.20</strong></p>
            </td>
            <td width="364">
            <p>Coffee Break</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p>&nbsp;</p>
            </td>
            <td width="364">
            <p>&nbsp;</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>10.20-10.40</strong></p>
            </td>
            <td width="364">
            <p>Evaluation of Upper Extremities Pathology ( Arteries &amp; Vein)</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>10.40-11.00</strong></p>
            </td>
            <td width="364">
            <p>AV Fistula Assessment (preparation &amp; surveillance)</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>11.00-11.20</strong></p>
            </td>
            <td width="364">
            <p>Evaluation of Carotid Artery Using Doppler Ultrasound</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>11.20-11.40</strong></p>
            </td>
            <td width="364">
            <p>Pseudoaneurysm vs AV Fistula Assessment</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>11.40-12.00</strong></p>
            </td>
            <td width="364">
            <p>Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>12.00-13.00</strong></p>
            </td>
            <td width="364">
            <p>LUNCH BREAK &amp; FRIDAY PRAYING</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p>&nbsp;</p>
            </td>
            <td width="364">
            <p>&nbsp;</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>13.00-14.00</strong></p>
            </td>
            <td width="364">
            <p>Video and Discussion : Lower Artery and Vein Doppler</p>
            <p>Ultrasound</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>14.00-15.00</strong></p>
            </td>
            <td width="364">
            <p>Video and Discussion : Carotid Doppler Ultrasound</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>15.00-15.50</strong></p>
            </td>
            <td width="364">
            <p>Video and Discussion : AV Fistula</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>15.50-16.00</strong></p>
            </td>
            <td width="364">
            <p>Post test and closing</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            : ws=="1B" ?
            <div><p>WORKSHOP 3 : PAD Management</p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>Audience</p>
            </td>
            <td width="70%">
            <p>General Practitioner</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>&nbsp;</p>
            <p>Theme</p>
            </td>
            <td width="70%">
            <p>A - Z Peripheral Management : From Patient Selection to</p>
            <p>Therapy</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>Day / Date</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>PIC</p>
            </td>
            <td width="70%">
            <p>dr. Vito Anggarino Damay, SpJP(K), M.Kes</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>Device</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>Sponsor</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>Moderator</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p>
            <table style={{marginLeft:"30px"}}>
            <tbody>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="20%">
            <p>TIME</p>
            </td>
            <td width="35%">
            <p>TOPIK</p>
            </td>
            <td width="35%">
            <p>SPEAKER</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>08.00-08.20</strong></p>
            </td>
            <td width="364">
            <p>Practical Aspect of Peripheral Artery Disease : Spectrum and</p>
            <p>Definition</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>08.20-08.35</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>08.40-09.00</strong></p>
            </td>
            <td width="364">
            <p>Clinical Anatomy and Pathomechanism of Most Common PAD:</p>
            <p>From Basic to Bedside</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>09.00-09.20</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>09.20-09.40</strong></p>
            </td>
            <td width="364">
            <p>Updated PAD Treatment: How about Cilostazol, Oral</p>
            <p>Thrombolytic and " PAD Cocktails"</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>09.40-09.55</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>10.00-10.20</strong></p>
            </td>
            <td width="364">
            <p>Coffee Break</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>10.20-10.40</strong></p>
            </td>
            <td width="364">
            <p>Managing Claudicatio Intermitten in Clinical Practice</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>10.40-11.55</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>11.00-11.20</strong></p>
            </td>
            <td width="364">
            <p>Imaging Interpretation of Lower and Upper Extremity AD</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>11.20-11.35</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>11.40-12.00</strong></p>
            </td>
            <td width="364">
            <p>The Role of Peripheral Intervention in PAD with Chronic Ulcer</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>12.00-12.15</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>12.20-13.00</strong></p>
            </td>
            <td width="364">
            <p>Lunch Break</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>13.00-13.15</strong></p>
            </td>
            <td width="364">
            <p>Case Presentation: Peripheral Artery Disease in Pandemic Era</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>13.15-13.30</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>13.30-13.50</strong></p>
            </td>
            <td width="364">
            <p>Managing Critical Limb Ischemia in Daily Practice</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>13.50-14.05</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>16.10-16.30</strong></p>
            </td>
            <td width="364">
            <p>UPDATE management on ALI</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>16.10-16.25</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>16.30-16.50</strong></p>
            </td>
            <td width="364">
            <p>Periprocedure Management of Limb Threatening PAD</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>16.50-17.05</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>17.10-17.30</strong></p>
            </td>
            <td width="364">
            <p>Recorded Case on PAD Intervention or Interactive PTA CASE</p>
            <p>Presentation</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "1px solid rgb(1,77,136)"}}>
            <td width="80">
            <p><strong>17.30-17.45</strong></p>
            </td>
            <td width="364">
            <p>All speaker "Take Home Message"</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div> : null
           }

          </CRow>
        </CCardBody>
      </CCard>

</>
  )
}

export default Colors
