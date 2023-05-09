<template>
    <div class="wrapper">
        <div class="container-fuild">
      <div id="headTitle">
      <div id="logo"><img alt="Healthbook" height="44" src="img/logo.png" width="70" _mstalt="155922" _msthash="1">
      </div>
      <h1 id="title" _msttexthash="48503" _msthash="2">Group-Product</h1>
    </div>
          <Header />
          <ol id="topicPath">
            <li>
              <router-link to="productsetting">
                <a href="dashbaord">
                  <font style="vertical-align : inherit">
                    <font style="vertical-align : inherit">
                      Group-Product
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
                <div class="search-box mb-4">
                    <a class="btn-radius bt-pn btn btn-sm" data-bs-toggle="dropdown" aria-expanded="false"
                        style="float:right; color: #f8f5b4;">
                        <i class="fas fa-plus" style="padding-right:5px;">
                        </i>
                        Menu
                    </a>
                        <ul class="dropdown-menu">
                        <li>
                        <a @click="getproductboom()" class="dropdown-item btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#staticboomId" tabindex="10028"><i class="fa-solid fa-circle-b"></i> Boom Product</a>
                        </li>
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
          <!-- <h2 class="search-box-title">
            Search
          </h2> -->
                    <div class="search-box-title">
                      <router-link to="product">
                          <a class="btn-radius btn btn-sm" href="#"
                          style="color: #f8f5b4; margin-top: -2px; color: #dbdee1">
                          <i class="fa fa-plus"> </i>
                          <!-- <i class="fa-solid fa-id-card"></i> -->
                          Product
                        </a>
                      </router-link>
                    </div>
                    <input id="search" name="search" type="hidden" value="1"/>
                    <div class="search-box-content">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="tbl_search" id = "hover-table">
                            <tbody>
                                <tr>
                                    <th width="10%">Group Name</th>
                                    <td width="90%">
                                        <input class="string_zen_kana clear_text text" :key="index" id="group_name" maxlength="8"  name="group_name" size="50" type="text" tabindex="10000"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th width="10%">Group Name 2</th>
                                    <td width="90%">
                                        <input class="string_zen_kana clear_text text" id="group_name_2" maxlength="50" name="group_name_2"  size="50" type="text" tabindex="10001"/>
                                    </td>
                                </tr>

                                <tr>
                                    <th width="10%">Brand Code</th>
                                    <td width="90%">
                                        <input class="string_zen_kana clear_text text" id="brand_code" maxlength="50" name="brand_code" size="50" type="text" tabindex="10001"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th width="10%">Category Code</th>
                                    <td width="90%">
                                        <input class="string_zen_kana clear_text text" id="cat_code" maxlength="50" name="cat_code" size="50" type="text" tabindex="10001"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th width="10%">Inactived</th>
                                     <td width="90%">
                                         <div class="selector" id="inactivced"><span>{{form.inactived}}</span>
                                            <select id="inactivced" name="inactivced" v-model="form.inactived" tabindex="10003" style="min-width: 51px; opacity: 0; width: 80px;">
                                                <option value="Yes" >Yes</option>
                                                    <option value="No">No</option>
                                            </select>
                                         </div>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
    
                        <div class="search-box-footer">
                            <div class="button type2" id="uniform-undefined" >
                              
                                <span>Search</span>
                                <input type="button" value="save" class="type2" @click="save()" style="opacity: 0; width: 63px" tabindex="10026"/>
                            </div>        
                                
                            <div class="button type2" id="uniform-undefined">
                                <span>Clear</span>
                                <input type="button" value="clear" class="type2" @click="clear()" style="opacity: 0; width: 63px" tabindex="10026"/>
                            </div>
                                <!-- Modal -->
                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog smallpopup" id="sup">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="staticBackdropLabel">Group Code</h5>
                                            <span class="ui-icon ui-icon-closethick" data-bs-dismiss="modal" aria-label="Close"></span>
                                        </div>
                                        <div style="margin:0;padding:10px;display:inline">
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0" class="tbl_search" id="hover-table">
                                                <tbody>
                                                    <tr>
                                                        <th width="40%">Group Code</th>
                                                        <td>
                                                          <input id="group_name" name="group_name" type="text" class="text" v-model="form.group_code" tabindex="10028" style="width:176px">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th width="40%">Group Name</th>
                                                        <td>
                                                            <input id="group_name" name="group_name" type="text" class="text" v-model="form.group_name" tabindex="10028" style="width:176px">
                                                        </td>
                                                    </tr>
                                                  
                                                    <tr>   
                                                        <th>Group Name 2</th>
                                                        <td>
                                                            <input id="group_name_2" name="group_name_2" type="text" class="text" v-model="form.group_name_2" tabindex="10029" style="width:176px">
                                                        </td>
                                                    </tr>
                                                    <tr>   
                                                        <th>Brand Code</th>
                                                        <td width="89%">
                                                                <select :disabled="isDisabled"  @change="autoUpdateProduct(form)"  v-model="form.brand_code" class="form" style="width:176px;">
                                                                <option v-for="brand in brands" :value='brand.brand_code'>{{ brand.brand_name}}</option>
                                                                </select>
                                                         </td>
                                                      </tr>
                                                    <tr>   
                                                        <th>Category Code</th>
                                                        <td width="89%">
                                                                <select :disabled="isDisabled"  @change="autoUpdateProduct(form)"  v-model="form.cat_code" class="form" style="width:176px;">
                                                                <option v-for="Cat in Cats" :value='Cat.cat_code'>{{Cat.cat_name }}</option>
                                                                </select>
                                                         </td>
                                                    </tr>
                                                    <!-- <tr>   
                                                        <th>Image</th>
                                                        <td>
                                                            <v-file-input v-model="avatarImage" label="Image" required  @change="onFileChange" ></v-file-input>
                                                        </td>
                                                    </tr> -->
                                                    <tr>   
                                                        <th>Inactived </th>
                                                        <td width="90%">
                                                            <div class="selector" id="inactivced"><span>{{form.inactived}}</span>
                                                                <select id="inactivced" name="inactivced" tabindex="10003"  v-model="form.inactived" style="min-width: 51px; opacity: 0; width: 80px;">
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
                                        <div class="button type2" id="uniform-undefined" >
                                            <span> {{bt1}}</span>
                                            <input type="button" value="save" class="type2"  data-bs-dismiss="modal" aria-label="Close"  @click="save()"  style="opacity: 0; width: 63px" tabindex="10026"/>
                                        </div>        
                                    
                                        <div class="button type2" id="uniform-undefined">
                                            <span>{{bt2}}</span>
                                            <input type="button" value="clear" class="type2" data-bs-dismiss="modal" aria-label="Close" @click="clear()" style="opacity: 0; width: 63px" tabindex="10026"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span class="marker"></span>
                    </div>
                </div>
            </div>
            <div class="box">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="table table-striped br-table newhover">
                        <thead>
                            <tr class="header-table">                              
                                <th width="4%">No</th>
                                <th width="13%">Group Code</th>
                                <th width="13%">Group Name</th>
                                <th width="10%">Group Name 2</th>
                                <th width="8%">Brand Code</th>
                                <th width="7%">Cat Code</th>
                                <th width="7%">Inactived</th>
                                <th width="7%">Create By</th>
                                <th width="7%">Update By</th>
                                <th width="12%">
                                 <div class="button" @click="checkActionForm('save','Save','Close','')">
                                    <span ><i class="fa fa-plus" aria-hidden="true"></i> Add New<input type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" tabindex="10028" style="opacity: 0; width: 76px;" ></span>
                                 </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item,index in items.data" :key="index">
                                    <td>{{index + 1}}</td>
                                    <td>{{item.group_code}}</td>
                                    <td>{{item.group_name}}</td>
                                    <td>{{item.group_name_2}}</td>
                                    <td>{{item.brand_code}}</td>
                                    <td>{{item.cat_code}}</td>
                                    <td>{{item.inactived}}</td>
                                    <td>{{item.created_by}}</td>
                                    <td>{{item.updete_by}}</td>
                                    <td>
                                      <div style="display:flex; flex-direction:row; justify-content:center; align-items: center">
                                     <div class="button" @click="checkActionForm('update','Update','Close',item)">
                                        <span><i class="fa fa-edit" aria-hidden="true"></i> Edit<input type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" tabindex="10028" style="opacity: 0; width: 76px;" ></span>
                                     </div>
                                     <div class="button" @click="deleteData(item.group_code)" id="uniform">
                                        <span><i class="fa fa-trash" aria-hidden="true"></i> Delete<input type="button" style="opacity: 0; width: 76px;" ></span>
                                     </div>
                                    </div>
                                   </td>
                          </tr>
                        </tbody>
                    </table>
                    <div class="box-footer-pagination">
                      <pagination :data="items" @pagination-change-page="showdata"/>
                    </div>
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
            <div class="card-body" >
              <div class=" mt-3 print-size"  >
                <div class="row d-flex align-items-baseline">
                  <div class="col-xl-9">
                  </div>
                  <hr>
                </div>

                <div style="padding:0 100px 0 100px">
                  <div class="col-md-12">
                    <div class="text-center">
                      <h3 class="title-purchase">PRODUCT-GROUP REPORT</h3>
                    </div>
                  </div>
                  
                  <div class="col-container">
                    <div class="col1">
                      <p class=" p-bg font-size p-pad">COMPANY NAME</p>
                        <p class="p-mg info-pad">Name : {{ company.company_name }}</p>
                        <p class="p-mg  info-pad">Phone Number :  {{ company.company_Phone }}</p>
                        <p class="p-mg info-pad">Email Address : {{ company.company_Email }}</p>
                        <p class="p-mg info-pad">Address : {{ company.company_Address }}</p>
                    </div>
                    <div class="col2">
                      <p class="text-center p-bg font-size p-pad">DATE</p>
                      <p class="text-center p-mg">{{ dateformart }}</p>
                      <p class="text-center p-bg font-size p-pad">TOTAL GROUP</p>
                      <p class="text-center p-mg">{{ items.total }}</p>

                    </div>
                  </div>
                  <div class=" my-2  justify-content-center">
                    <table id="pr-tb">
                      <thead>
                        <tr class="p-bg">
                          <th class="text-center" width="10">No</th>
                          <th class="text-center" width="40">Group Code</th>
                          <th class="text-center" width="40">Group Name</th>
                          <!-- <th class="text-center">Brand Name</th> -->
                          <th class="text-center" width="20%">Brand Code</th>
                          <th class="text-center" width="20">Cat Code</th>
                        </tr>
                      </thead>
                    <tbody >
                        <tr v-for="item,index in items.data" :key="index" >
                            <td>{{index + 1}}</td>
                            <td>{{item.group_code}}</td>
                            <td>{{item.group_name}}</td>
                            <!-- <td>{{item.group_name_2}}</td> -->
                            <td>{{item.brand_code}}</td>
                            <td>{{item.cat_code}}</td>
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
import axios from "axios";
import {exportDefaultSpecifier} from '@babel/types';
import moment from "moment";
import Header from "../Header.vue";
import pagination from "laravel-vue-pagination";
window.Menu = "Group-Product";
export default {
  components: {Header,pagination},
    data() {
        return {
            issave:'save',
            bt1:'Save',
            bt2:'Close',
            items:{},
            company: [],
            dateformart: '',
            links:[],
            brands:[],
            Cats:[],
            products:[],
            perPage: '',
            currentPage: 0,
            last_page:1,
            imagePreviewURL:[],
            form: {
                id: "",
                group_code: "",
                group_name: "",
                image_url: "",
                group_name_2: "",
                brand_code: "",
                cat_code: "",
                inactived: "Yes",
                created_by: "",
                updete_by: "",
            },
            forms: {
                id: "",
                group_code: "",
                group_name: "",
                image_url: "",
                group_name_2: "",
                brand_code: "",
                cat_code: "",
                inactived: "",
                created_by: "",
                updete_by: "",
            },
        };
    },

    mounted() {
        this.showdata()
        this.getBrand()
        this.getCat()  
        this.getcompany();  
    },
    
    methods: {
        getProductGroup() {
            axios.get('api/v1/productgroup').then(res => {
            this.items = res
        });
        },
        save() {
            if(this.issave == "save"){
                axios.post('api/v1/progroups/create',this.form).then(res => {
                    this.showdata()
                })   
            }else{
                axios.post('api/v1/progroups/updete/'+this.issave,this.form).then(res => {
                    this.showdata()
                })  
            }
        },
        getcompany(){
          axios.get("/api/v1/getSetup/")
            .then((response) => {
             this.company = response.data;
             this.dateformart = moment(new Date()).format('YYYY-MM-DD');
            });
    },
    onFileChange(payload) { 
         file = payload 
         if (file) {this.imagePreviewURL = URL.createObjectURL(file),
           URL.revokeObjectURL(file);
       } else {

        this.imagePreviewURL =  null
      }
    },
    checkActionForm(checkform,bt1,bt2,brandId){
            this.form ={}
            this.bt1 = bt1
            this.bt2 = bt2
        if(checkform =="save"){         
            this.issave = 'save'
        }
         else{
            this.form = brandId
            this.issave = brandId.group_code
        }
        
     },
     showdata(page=1) {
              if(page > 0 && page <= this.last_page){
              axios.get('/api/v1/progroups').then(({data})=>{
              this.links = data.links
              this.last_page = data.last_page       
              this.links.forEach(element => {
                 if(element.label == page){
                    this.perPage = "api/v1/progroups?page="+page
                    axios.get(this.perPage).then(({data})=>{
                    this.currentPage = data.current_page
                    this.items = data
                  })
                 }
              });

            }).catch(({response})=>{
                console.error(response)
            })
           }
     },
    deleteData(id){
        axios.get('/api/v1/progroups/delete/'+id).then(res => {
                this.showdata()
        }) 
   },
   getBrand(){
    axios.get('api/v1/brands/getdata').then(res => {
                this.brands = res.data
        }) 
   },
   getCat(){
    axios.get('api/v1/category/getCatName').then(res => {
                this.Cats = res.data
        }) 
   },
   print() {
       var printContents = document.getElementById("purchaseorder").innerHTML;
       var mywindow;     
        mywindow = window.open('', 'mydiv','height=800,width=1200,scrollbars=yes','');          
        mywindow.document.write('<html><head><title>my div</title>');
        mywindow.document.write('<link rel="stylesheet" href="css/style.css">');      
        mywindow.document.write('<link rel="stylesheet" href="css/app.css">');   
        mywindow.document.write('<link rel="stylesheet" href="css/pstyle.css">');   
        mywindow.document.write('</head><body>');
        mywindow.document.write(printContents);                                    
        mywindow.document.write('</body> </html>');
         setTimeout(() => { mywindow.document.close();mywindow.focus(); mywindow.print(); setTimeout(function () {window.close();}, 1);cb();}, 1000);
    },
  },
};

</script>
