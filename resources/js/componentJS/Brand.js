import { ref, reactive, watch, computed, onMounted } from "vue";
import axios from "axios";
import moment from "moment";
import readXlsxFile from "read-excel-file";
import * as XLSX from "xlsx/xlsx.mjs";
export default function useBrand() {
    const items = ref([]);
    const search = ref("");
    const checkexcel = ref([]);
    const exefile = ref("");

    const excel = ref("Import");

    const dateobj = new Date();
    const newdate = dateobj.toISOString().split("T")[0];

    const company = ref([]);
    const form = reactive({
        id: "",
        brand_code: "",
        brand_name: "",
        brand_name_2: "",
        inactived: "Yes",
    });
    const braExcels = ref([
        {
            brand_code: "",
            brand_name: "",
            brand_name_2: "",
            inactived: "",
        },
    ]);
    onMounted(() => {
        getBrand();
        getcompany();
    });
    watch(search, () => {
        getBrand();
    });
    const getcompany = async () => {
        axios.get("/api/v1/getSetup/").then(({ data }) => {
            company.value = data;
            console.log(company.value);
        });
    };
    const getBrand = async (p = 1) => {
        axios
            .get("api/v1/brands?page=" + p, {
                params: { search: search.value },
            })
            .then(({ data }) => {
                items.value = data;
            });
    };
    const saveBrand = async (form) => {
        axios.post("api/v1/brands/create/", form);
    };
    const deleteBrand = async (id) => {
        axios.post("api/v1/brands/delete/" + id);
    };
    const updateBrand = async (x, form) => {
        axios.post("api/v1/brands/update/" + x, form);
    };
    const printBrand = async () => {
        var printContents = document.getElementById("categoryprint").innerHTML;
        var mywindow;
        mywindow = window.open(
            "",
            "mydiv",
            "height=800,width=1200,scrollbars=yes",
            ""
        );
        mywindow.document.write("<html><head><title>my div</title>");
        mywindow.document.write('<link rel="stylesheet" href="css/style.css">');
        mywindow.document.write('<link rel="stylesheet" href="css/app.css">');
        mywindow.document.write(
            '<link rel="stylesheet" href="css/pstyle.css">'
        );
        mywindow.document.write("</head><body>");
        mywindow.document.write(printContents);
        mywindow.document.write("</body> </html>");
        setTimeout(() => {
            mywindow.document.close();
            mywindow.focus();
            mywindow.print();
            setTimeout(function () {
                window.close();
            }, 1);
            cb();
        }, 1000);
    };
    const dataexcelBrand = async (event) => {
        exefile.value = "";
        const xlsxfile = event.target.files ? event.target.files[0] : null;
        readXlsxFile(xlsxfile).then((rows) => {
            var x = 0;
            rows.forEach((element) => {
                if (x >= 0) {
                    if (x == 0) {
                        checkexcel.value = element;
                    } else {
                        if (
                            checkexcel.value[0] == "brand_code" &&
                            checkexcel.value[1] == "brand_name" &&
                            checkexcel.value[2] == "brand_name_2" &&
                            checkexcel.value[3] == "inactived"
                        ) {
                            braExcels.value.push({
                                brand_code: element[0],
                                brand_name: element[1],
                                brand_name_2: element[2],
                                inactived: element[3],
                            });
                            console.log(braExcels);
                        } else {
                            exefile.value = " Fail Data";
                        }
                    }
                }
                x++;
            });
        });
        exefile.value = "";
    };
    const savexcelBrand = async () => {
        var b = 0;
        braExcels.value.forEach((el) => {
            if (b != 0) {
                axios.post("api/v1/brands/create/", el).then((data) => {
                    console.log(data);
                });
            }
            b++;
        });
    };
    return {
        items,
        search,
        form,
        checkexcel,
        exefile,
        excel,
        braExcels,
        company,
        newdate,
        getBrand,
        deleteBrand,
        saveBrand,
        updateBrand,
        printBrand,
        dataexcelBrand,
        savexcelBrand,
        getcompany,
    };
}
