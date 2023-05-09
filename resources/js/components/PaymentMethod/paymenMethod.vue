<template>
  <div class="wrapper">
    <div class="container-fuild">
      <div id="headTitle">
        <div id="logo"><img alt="Healthbook" height="44" src="img/logo.png" width="70" _mstalt="155922" _msthash="1">
        </div>
        <h1 id="title" _msttexthash="48503" _msthash="2">Payment-Method</h1>
      </div>
      <Header />
      <ol id="topicPath">
        <li>
          <router-link to="productsetting">
            <a href="dashbaord">
              <font style="vertical-align : inherit">
                <font style="vertical-align : inherit">
                  Payment-Method
                </font>
              </font>
            </a>
          </router-link>
        </li>
      </ol>

    </div>
    <div class="search-box">
      <div id="product">

        <!--#contents -->
        <div class="search-box">
          <a class="btn-radius bt-pn btn btn-sm" data-bs-toggle="dropdown" aria-expanded="false"
            style="float:right; color: #f8f5b4;">
            <i class="fas fa-plus" style="padding-right:5px;">
            </i>
            Menu
          </a>
          <ul class="dropdown-menu">
            <li>
              <a @click="getsuppliyerview()" class="dropdown-item btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#staticboomId" tabindex="10028"><i class="fa fa-print" aria-hidden="true"></i> Print</a>
            </li>
            <li>
              <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdropss" tabindex="10028"
                href="#"><i class="fas fa-file-excel"></i> To Excel</a>
            </li>
            <li>
              <a class="dropdown-item btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropss"
                tabindex="10028"><i class="fas fa-edit"></i> Release</a>
            </li>
          </ul>
          <h2 class="search-box-title">
            Search
            <input name="search" type="search" id="search" class="text" v-model="search" />
          </h2>
          <input id="search" name="search" type="hidden" value="1" />
          <div>
            <div>
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog smallpopup" id="sup">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        Payment Method
                      </h5>
                      <span class="ui-icon ui-icon-closethick" data-bs-dismiss="modal" aria-label="Close"></span>
                    </div>
                    <div style="margin: 0; padding: 10px; display: inline">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" class="tbl_search">
                        <tbody>
                          <tr>
                            <th width="40%">Paymentmethod Code</th>
                            <td width="60%">
                              <input :disabled="checktext" class="string_zen_kana clear_text text" id="brand_name"
                                maxlength="50" name="brand_name" v-model="this.form.paymentmethod_code" type="text"
                                tabindex="10001" />
                            </td>
                          </tr>

                          <tr>
                            <th width="40%">Paymentmethod</th>
                            <td width="60%">
                              <input class="string_zen_kana clear_text text" id="brand_name_2" maxlength="50"
                                name="paymentmethod" v-model="this.form.paymentmethod" type="text" tabindex="10001" />
                            </td>
                          </tr>
                          <tr>
                            <th width="40%">Description</th>
                            <td width="60%">
                              <input class="string_zen_kana clear_text text" id="brand_name_2" maxlength="50"
                                name="description" v-model="this.form.description" type="text" tabindex="10001" />
                            </td>
                          </tr>
                          <tr>
                            <th width="40%">Inactived</th>
                            <td width="60%">
                              <div class="selector" id="inactivced">
                                <span>{{ form.inactived }}</span>
                                <select id="inactivced" name="inactived" v-model="this.form.inactived" tabindex="10003"
                                  style="min-width: 51px;  opacity: 0;  width: 80px; ">
                                  <option value="Yes">Yes</option>
                                  <option value="No">No</option>
                                </select>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="modal-footer">
                      <div class="button type2" id="uniform-undefined">
                        <span>{{ this.bt1 }}</span>
                        <input type="button" value="save" class="type2" @click="save()" data-bs-dismiss="modal" update
                          style="opacity: 0; width: 63px" tabindex="10026" />
                      </div>

                      <div class="button type2" id="uniform-undefined">
                        <span>{{ this.bt2 }}</span>
                        <input type="button" value="clear" class="type2" data-bs-dismiss="modal" aria-label="Close"
                          @click="clear()" style="opacity: 0; width: 63px" tabindex="10026" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <span class="marker"></span> -->
            </div>
          </div>
        </div>

        <div class="box">

          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="table table-striped br-table">
            <thead>
              <tr class="header-table">
                <th width="3%">No</th>
                <th width="15%">Paymentmethod Code</th>
                <th width="15%">Paymentmethod </th>
                <th width="20%%">Description</th>
                <th width="10%">Inactived </th>
                <th width="20%">
                  <div class="button" id="uniform-undefined" @click="checkActionForm('save', 'Save', 'Close')">
                    <span><i class="fa fa-plus"></i>Add New
                      <input type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" tabindex="10028"
                        style="opacity: 0; width: 76px" />
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in items.data" :key="index">
                <td width="3%">{{ index + 1 }}</td>
                <td width="13%">{{ item.paymentmethod_code }}</td>
                <td width="13%">{{ item.paymentmethod }}</td>
                <td width="13%">{{ item.description }}</td>
                <td width="6%">{{ item.inactived }}</td>
                <td width="20%" class="text-center">
                  <div class="button" id="uniform-undefined">
                    <span><i class="fa fa-edit"></i>Edit<input type="button" @click="checkActionForm('Update', 'Update', 'Close', item)"
                        data-bs-toggle="modal" data-bs-target="#staticBackdrop" tabindex="10028"
                        style="opacity: 0; width: 76px" /></span>
                  </div>
                  <div class="button" id="uniform-undefined">
                    <span><i class="fa fa-trash"></i>Delete<input type="button" @click="dalete(item.id)" tabindex="10028"
                        style="opacity: 0; width: 76px" /></span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>


  <div class="modal fade ui-modal" id="staticboomId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticboomId" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content ui-dialog">
        <div class="ui-widget-header">
          <h5 class="modal-title in-header" id="staticBackdropLabel"><i class="fa fa-print" aria-hidden="true"></i>
            Print</h5>
          <span class="ui-icon ui-icon-closethick" data-bs-dismiss="modal" aria-label="Close"></span>
        </div>
        <div class="ui-dialog-content" id="purchaseorder">
          <div class="card">
            <div class="card-body">
              <div class="mt-3 print-size">

                <div style="padding:0 100px">
                  <div class="col-md-12">
                    <div class="text-center">
                      <h3 class="title-purchase">PAYMENT METHOD</h3>
                    </div>
                  </div>
                  <div class="col-container">
                    <div class="col1">
                      <p class=" p-bg font-size p-pad">COMPANY NAME</p>
                      <p class="p-mg info-pad">Name : {{ company.company_name }}</p>
                      <p class="p-mg  info-pad">Phone Number : {{ company.company_Phone }}</p>
                      <p class="p-mg info-pad">Email Address : {{ company.company_Email }}</p>
                      <p class="p-mg info-pad">Address : {{ company.company_Address }}</p>
                    </div>
                    <div class="col2">
                      <p class="text-center p-bg font-size p-pad">DATE</p>
                      <p class="text-center p-mg">{{ dateformart }}</p>
                    </div>
                  </div>
                  <div class=" my-2  justify-content-center">
                    <table id="pr-tb">
                      <thead>
                        <tr class="p-bg">
                          <th class="text-center" style="width:60px">No</th>
                          <th class="text-center">Paymentmethod Code</th>
                          <th class="text-center">Paymentmethod</th>
                          <th class="text-center">Description</th>
                          <th class="text-center">Inactived</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in items.data" :key="index">
                          <td>{{ index + 1 + "." }}</td>
                          <td>{{ item.paymentmethod_code }}</td>
                          <td>{{ item.paymentmethod }}</td>
                          <td>{{ item.description }}</td>
                          <td>{{ item.inactived }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <hr>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a class="btn-purchase btn-light text-capitalize border-0" data-mdb-ripple-color="dark" @click="print()"><i
              class="fas fa-print text-primary"></i> Print</a>

        </div>
      </div>
    </div>
  </div>

</template>
<script>
import Header from '../Header.vue';
import pagination from "laravel-vue-pagination";
import moment from "moment";
import axios from "axios";
export default {
  components: { pagination, Header },
  data() {
    return {
      issave: "",
      bt1: "",
      bt2: "",
      company: [],
      dateformart: ' ',
      items: {},
      links: [],
      products: [],
      perPage: "",
      checktext: false,
      currentPage: 0,
      last_page: 1,
      form: {
        id: "",
        paymentmethod_code: "",
        paymentmethod: "",
        description: "",
        inactived: "",
        statue: ""
      },
    };
  },

  mounted() {
    this.getBrands();
    this.getcompany();
  },

  methods: {
    getBrands() {
      axios.get("/api/v1/payment/index/")
        .then((data) => {
          this.items = data;
        })
    },
    getcompany() {
      axios.get("/api/v1/getSetup/")
        .then((response) => {
          this.company = response.data;
          this.dateformart = moment(new Date()).format('YYYY-MM-DD');
        });
    },
    save() {
      if (this.issave == "save") {
        console.log(this.form);
        axios.post("/api/v1/payment/create/" + this.form.paymentmethod_code, this.form).then(() => {
          this.getBrands();
        });
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
        axios
          .post("/api/v1/payment/update/" + this.form.id, this.form)
          .then((res) => {
            this.getBrands();
          });
      }
      this.clear();
    },
    edit(test) {
      this.form = test;
    },
    clear() {
      this.form = [];
    },
    dalete(brand) {
      axios.get("api/v1/payment/destroy/" + brand).then((res) => {
        this.form = res.data;
        this.getBrands(1);
      });
    },
    checkActionForm(checkform, bt1, bt2, brandId) {
      this.checktext = false;
      this.form = [];
      if (checkform == "save") {
        this.bt1 = bt1;
        this.bt2 = bt2;
        this.issave = "save";
      } else {
        this.bt1 = bt1;
        this.bt2 = bt2;
        this.edit(brandId);
        this.issave = brandId;
        this.checktext = true;
      }
    },
    serchdata() {
      axios.post("api/v1/brands/search").then((res) => {
        console.log(res.data);
      });
    },
    print() {
      var printContents = document.getElementById("purchaseorder").innerHTML;
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
    },
  },
};
</script>
