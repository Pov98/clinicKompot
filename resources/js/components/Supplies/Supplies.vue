<template>
  <div class="wrapper">
    <div id="headTitle">
      <div id="logo"><img alt="Healthbook" height="44" src="img/logo.png" width="70" _mstalt="155922" _msthash="1">
      </div>
      <h1 id="title" _msttexthash="48503" _msthash="2">Suppliyer</h1>
    </div>
    <Header />
    <ol id="topicPath">
      <li style="margin-left: 285px;">
        <router-link to="productsetting">
          <a href="dashbaord">
            <font style="vertical-align : inherit">
              <font style="vertical-align : inherit">
                Suppliyer
              </font>
            </font>
          </a>
        </router-link>
      </li>
    </ol>
    <div class="search-box">
      <div id="product">
        <MenuSup />
        <h2 class="search-box-title">
          Search
          <input name="search" type="search" id="search" class="text" v-model="search" />
        </h2>
        <div class="box">
          <div class="box-content">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" class="table table-striped br-table">
              <thead>
                <tr class="header-table">
                  <th>Image</th>
                  <th>Suppliyer Name</th>
                  <th>Addresss</th>
                  <th>Phone Number</th>
                  <th>Fax Number</th>
                  <th>Email</th>
                  <th>Contact Name</th>
                  <th>Contact Phone</th>
                  <!-- <th>Inactived</th> -->

                  <th>
                    <div class="button" id="uniform-undefined">
                      <span><i class="fa fa-plus"></i> Add New<input type="button" @click="btnAdd" data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop" tabindex="10028" style="opacity: 0; width: 76px" /></span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(suppliyer, index) in suppliyers.data" :key="index">
                  <td>
                    <img class="direct-chat-img" :src="axios.defaults.baseURL + '/img/suppliyer/' + suppliyer.image_url" />
                  </td>
                  <td>{{ suppliyer.sup_name }}</td>
                  <td>{{ suppliyer.address }}</td>
                  <td>{{ suppliyer.phone_no }}</td>
                  <td>{{ suppliyer.fax_no }}</td>
                  <td>{{ suppliyer.email }}</td>
                  <td>{{ suppliyer.contact_name }}</td>
                  <td>{{ suppliyer.contact_phone }}</td>
                  <!-- <td width="6%">{{ suppliyer.inactived }}</td> -->
                  <td class="text-center">
                    <div @click="btnEdit(suppliyer)" class="button" id="uniform-undefined">
                      <span><i class="fa fa-edit"></i> Edit<input type="button" data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop" tabindex="10028" style="opacity: 0; width: 40px" /></span>
                    </div>
                    <div @click="btnDelete(suppliyer.id)" class="button" id="uniform-undefined">
                      <span><i class="fa fa-trash"></i> Delete<input type="button" tabindex="10028"
                          style="opacity: 0; width: 40px" /></span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="box-footer-pagination">
            <pagination :data="suppliyers" @pagination-change-page="getSuppliyer" />
          </div>
        </div>
      </div>
    </div>
    <div class="search-box-content">
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog smallpopup" id="sup">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Suppliyer</h5>
              <span class="ui-icon ui-icon-closethick" data-bs-dismiss="modal" aria-label="Close"></span>
            </div>
            <div style="margin: 0; padding: 10px; display: inline">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" class="tbl_search">
                <tbody>
                  <tr>
                    <th width="40%">Suppliyer Code</th>
                    <td>
                      <input :disabled="disabled" name="supplier_code" type="text" class="text" v-model="form.sup_code"
                        tabindex="10029" />
                    </td>
                  </tr>
                  <tr>
                    <th width="40%">Suppliyer Name</th>
                    <td>
                      <input name="supplier_name" type="text" class="text" v-model="form.sup_name" tabindex="10029" />
                    </td>
                  </tr>
                  <tr>
                    <th width="40%">Suppliyer Name 2</th>
                    <td>
                      <input name="supplier_name_2" type="text" class="text" v-model="form.sup_name_2" tabindex="10029" />
                    </td>
                  </tr>
                  <tr>
                    <th width="40%">Image</th>
                    <td>
                      <input type="file" id="myfile" name="myfile" @change="imgUplaod($event)" />
                    </td>
                  </tr>
                  <tr>
                    <th width="40%">Addresss</th>
                    <td>
                      <input name="address" type="text" class="text" v-model="form.address" tabindex="10029" />
                    </td>
                  </tr>
                  <tr>
                    <th width="40%">Phone Number</th>
                    <td>
                      <input name="phone_num" type="number" class="text" v-model="form.phone_no" tabindex="10029" />
                    </td>
                  </tr>
                  <tr>
                    <th width="40%">Phone Number 2</th>
                    <td>
                      <input name="phone_num2" type="number" class="text" v-model="form.phone_no_2" tabindex="10029" />
                    </td>
                  </tr>
                  <tr>
                    <th width="40%">Fax Number</th>
                    <td>
                      <input name="fax_num" type="text" class="text" v-model="form.fax_no" tabindex="10029" />
                    </td>
                  </tr>

                  <tr>
                    <th width="40%">Email</th>
                    <td>
                      <input name="email" type="email" class="text" v-model="form.email" tabindex="10029" />
                    </td>
                  </tr>
                  <tr>
                    <th width="40%">Contact Name</th>
                    <td>
                      <input name="contact_name" type="text" class="text" v-model="form.contact_name" tabindex="10029" />
                    </td>
                  </tr>
                  <tr>
                    <th width="40%">Contact Phone</th>
                    <td>
                      <input name="contact_phone" type="number" class="text" v-model="form.contact_phone"
                        tabindex="10029" />
                    </td>
                  </tr>
                  <tr>
                    <th width="40%">status</th>
                    <td>
                      <input name="status" type="text" class="text" v-model="form.status" tabindex="10029" />
                    </td>
                  </tr>
                  <tr>
                    <th width="40%">Inactived</th>
                    <td width="60%">
                      <div class="selector" id="inactivced">
                        <span>{{ form.inactived }}</span>
                        <select id="inactivced" name="inactivced" v-model="form.inactived" tabindex="10003"
                          style="min-width: 51px; opacity: 0; width: 80px">
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
              <div data-bs-dismiss="modal" v-show="btnValue1" @click="btnSave" class="button type2">
                <span> Save</span>
                <input type="button" class="type2" style="opacity: 0; width: 63px" tabindex="10026" />
              </div>
              <div v-show="btnValue2" data-bs-dismiss="modal" aria-label="Close" @click="btnUpdate(form.id)"
                class="button type2" id="uniform-undefined">
                <span> Update</span>
                <input type="button" class="type2" style="opacity: 0; width: 63px" tabindex="10026" />
              </div>
              <div data-bs-dismiss="modal" aria-label="Close" class="button type2" id="uniform-undefined">
                <span>Close</span>
                <input type="button" value="clear" class="type2" style="opacity: 0; width: 63px" tabindex="10026" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Message Modal -->
    <div id="myModal" class="lskymodal">
      <div class="lskymodal-content">
        <p>
          <strong>{{ message }}</strong>{{ msg }}
        </p>
      </div>
    </div>
  </div>
</template>
    
<script setup>
import axios from "axios";
import Header from "../Header.vue";
import pagination from "laravel-vue-pagination";
import useSuppliyer from "../../componentJS/Suppliyer";
import MenuSup from "./Menu_Sup.vue";
import { ref } from "vue";
const disabled = ref(true);
const btnValue1 = ref(false);
const btnValue2 = ref(false);
window.Menu = "Suppliyer";
const {
  deleteSup,
  supImage,
  updateSup,
  saveSup,
  getSuppliyer,
  suppliyers,
  form,
  search,
  photo_path,
  msg,
  message,
} = useSuppliyer();
const btnAdd = async () => {
  form.sup_code = "";
  form.sup_name = "";
  form.sup_name_2 = "";
  form.image_url = "";
  form.address = "";
  form.phone_no = "";
  form.phone_no_2 = "";
  form.fax_no = "";
  form.email = "";
  form.contact_name = "";
  form.contact_phone = "";
  form.status = "";
  form.inactived = "Yes";
  disabled.value = false;
  btnValue1.value = true;
  btnValue2.value = false;
};
const btnEdit = async (sup) => {
  form.id = sup.id;
  form.sup_code = sup.sup_code;
  form.sup_name = sup.sup_name;
  form.sup_name_2 = sup.sup_name_2;
  form.image_url = sup.image_url;
  form.address = sup.address;
  form.phone_no = sup.phone_no;
  form.phone_no_2 = sup.phone_no_2;
  form.fax_no = sup.fax_no;
  form.email = sup.email;
  form.contact_name = sup.contact_name;
  form.contact_phone = sup.contact_phone;
  form.status = sup.status;
  form.inactived = sup.inactived;
  disabled.value = true;
  btnValue2.value = true;
  btnValue1.value = false;
};
const btnSave = async () => {
  saveSup(form);
  getSuppliyer();
};
const btnUpdate = async (x) => {
  updateSup(x, form);
  getSuppliyer();
};
const imgUplaod = async (e) => {
  supImage(e);
};
const btnDelete = async (id) => {
  deleteSup(id);
  getSuppliyer();
};
</script>
    