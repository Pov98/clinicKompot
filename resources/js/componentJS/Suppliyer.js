import { ref, reactive, watch, computed, onMounted } from "vue";
import axios from "axios";
import moment from "moment";
// import readXlsxFile from "read-excel-file";
// import * as XLSX from "xlsx/xlsx.mjs";
export default function useSuppliyer() {
    const suppliyers = ref([]);
    const search = ref('');
    const msg = ref('')
    const company = ref([]);
    const dateobj = new Date();
    const newdate = dateobj.toISOString().split('T')[0];

    const message = ref('')
    const photo_path = ref('')
    const form = reactive({
        id: "",
        sup_code: "",
        sup_name: "",
        sup_name_2: "",
        image_url: "",
        address: "",
        phone_no: "",
        phone_no_2: "",
        fax_no: "",
        email: "",
        contact_name: "",
        contact_phone: "",
        status: "",
        inactived: "Yes",
    })
    onMounted(() => {
        getSuppliyer();
        getcompany();
    })
    watch(search, () => {
        getSuppliyer();
    })
    const getSuppliyer = async (p = 1) => {
        axios.get('api/v1/suppliyers?page=' + p, { params: { search: search.value } }).then(({ data }) => {
            suppliyers.value = data
        })

    }
    const getcompany = async () => {
        axios.get("/api/v1/getSetup/")
            .then(({ data }) => {
                company.value = data;
                console.log(company.value);
            });
    }
    const saveSup = async (form) => {
        // if (form.sup_name == '') {
        //     messageAlert()
        //     message.value = 'Error'
        //     msg.value = 'Please input your Name'
        // }
        // else if (form.image_url == '') {
        //     messageAlert()
        //     message.value = 'Error'
        //     msg.value = 'Please input your Image'
        // } else if (form.address == '') {
        //     messageAlert()
        //     message.value = 'Error'
        //     msg.value = 'Please input your Address'
        // } else if (form.phone_no == '') {
        //     messageAlert()
        //     message.value = 'Error'
        //     msg.value = 'Please input your PhoneNumber'
        // } else if (form.contact_name == '') {
        //     messageAlert()
        //     message.value = 'Error'
        //     msg.value = 'Please input your Contact Name'
        // }
        // else {
        axios.post('api/v1/suppliyers/store/', form).then(() => {
            message.value = 'Success'
            msg.value = 'Please input your Image'
        });
        // }

    }
    const updateSup = async (x, form) => {
        axios.post('api/v1/suppliyers/update/' + x, form)
    }
    const supImage = async (e) => {
        const image = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
            (photo_path.value = ""), (form.image_url = e.target.result);
        };
    }
    const deleteSup = async (id) => {
        axios.post("api/v1/suppliyers/delete/" + id)
    }
    const printSup = async () => {
        var printContents = document.getElementById("printSupplyer").innerHTML;
        var mywindow;
        mywindow = window.open('', 'mydiv', 'height=800,width=1200,scrollbars=yes', '');
        mywindow.document.write('<html><head><title>my div</title>');
        mywindow.document.write('<link rel="stylesheet" href="css/style.css">');
        mywindow.document.write('<link rel="stylesheet" href="css/app.css">');
        mywindow.document.write('<link rel="stylesheet" href="css/pstyle.css">');
        mywindow.document.write('</head><body>');
        mywindow.document.write(printContents);
        mywindow.document.write('</body> </html>');
        setTimeout(() => { mywindow.document.close(); mywindow.focus(); mywindow.print(); setTimeout(function () { window.close(); }, 1); cb(); }, 1000);
    }
    const messageAlert = async () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        setTimeout(() => (modal.style.display = "none"), 2000);
    }
    return {
        form,
        suppliyers,
        search,
        company,
        newdate,
        getSuppliyer,
        getcompany,
        saveSup,
        updateSup,
        supImage,
        photo_path,
        deleteSup,
        printSup,
        msg,
        message,
        messageAlert,
    }
}