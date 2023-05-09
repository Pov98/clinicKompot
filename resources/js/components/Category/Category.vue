<template>
  <div class="wrapper">
    <div id="headTitle">
      <div id="logo"><img alt="Healthbook" height="44" src="img/logo.png" width="70" _mstalt="155922" _msthash="1">
      </div>
      <h1 id="title" _msttexthash="48503" _msthash="2">Category</h1>
    </div>
    <Header />
    <ol id="topicPath">
          <li style="margin-left: 280px;">
            <router-link to="productsetting">
              <a href="dashbaord">
                <font style="vertical-align : inherit">
                      <font style="vertical-align : inherit">Category</font>
                    </font>
            </a>
            </router-link>
          </li>
        </ol>
    <div class="search-box">
      <div id="product">
        <!--#contents -->
        <!-- <a href="dashbaord">
              <font style="vertical-align: inherit">
                <font style="vertical-align: inherit">Stock</font>
              </font>
            </a> -->
        <div class="search-box mb-4">
          <Menu />
          <h2 class="search-box-title">
            Search
            <input
              name="search"
              type="search"
              id="search"
              class="text"
              v-model="search"
            />
          </h2>
          <input id="search" name="search" type="hidden" value="1" />
          <div class="box">
            <table
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="table table-striped br-table"
            >
              <thead>
                <tr class="header-table">
                  <th width="3%">No</th>

                  <th width="12%">Category Name</th>

                  <th width="12%">Category Name 2</th>

                  <th width="12%">Inactivced</th>

                  <th width="12%">
                    <div class="button" id="uniform-undefined">
                      <span
                        ><i class="fa fa-plus" aria-hidden="true"></i> Add New<input
                          @click="btnAdd()"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          tabindex="10028"
                          style="opacity: 0; width: 76px"
                      /></span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="(Category, index) in Categories.data"
                  :key="index"
                  class="cate-td"
                >
                  <td width="3%">
                    {{ index + 1 + "." }}
                  </td>

                  <td width="12%">
                    {{ Category.cat_name }}
                  </td>

                  <td width="12%">
                    {{ Category.cat_name_2 }}
                  </td>

                  <td width="12%">
                    {{ Category.inactived }}
                  </td>

                  <td width="12%" class="text-center">
                    <div class="button" id="uniform-undefined">
                      <span
                        ><i class="fa fa-edit"></i> Edit<input
                          type="button"
                          @click="btnEdit(Category)"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          tabindex="10028"
                          style="opacity: 0; width: 76px"
                      /></span>
                    </div>

                    <div class="button" id="uniform-undefined">
                      <span
                        ><i class="fa fa-trash"></i> Delete<input
                          type="button"
                          @click="btnDelete(Category.id)"
                          tabindex="10028"
                          style="opacity: 0; width: 76px"
                      /></span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="box-footer-pagination">
              <pagination
                :data="Categories"
                @pagination-change-page="getCategory"
              />
            </div>
          </div>

          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog smallpopup" id="sup">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Category</h5>
                  <span
                    class="ui-icon ui-icon-closethick"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></span>
                </div>

                <div style="margin: 0; padding: 10px; display: inline">
                  <table
                    width="100%"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="tbl_search"
                  >
                    <tbody>
                      <tr>
                        <th width="40%">Category Code</th>

                        <td>
                          <input
                            id="cat_code"
                            :disabled="disabled"
                            name="cat_code"
                            v-model="form.cat_code"
                            type="text"
                            class="text"
                            tabindex="10028"
                          />
                        </td>
                      </tr>

                      <tr>
                        <th width="40%">Category Name</th>

                        <td>
                          <input
                            id="cat_name"
                            name="cat_name"
                            v-model="form.cat_name"
                            type="text"
                            class="text"
                            tabindex="10029"
                          />
                        </td>
                      </tr>

                      <tr>
                        <th width="40%">Category Name 2</th>

                        <td>
                          <input
                            id="cat_name_2"
                            name="cat_name_2"
                            v-model="form.cat_name_2"
                            type="text"
                            class="text"
                            tabindex="10029"
                          />
                        </td>
                      </tr>

                      <tr>
                        <th width="40%">Inactived</th>

                        <td width="90%">
                          <div class="selector" id="inactivced">
                            <span>{{ form.inactived }}</span>

                            <select
                              id="inactivced"
                              name="inactivced"
                              tabindex="10003"
                              v-model="form.inactived"
                              style="min-width: 51px; opacity: 0; width: 80px"
                            >
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
                  <div
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    class="button type2"
                    @click="btnSave()"
                    id="uniform-undefined"
                    v-show="btnValue1"
                  >
                    <span> Save </span>

                    <input
                      type="button"
                      value="save"
                      class="type2"
                      style="opacity: 0; width: 63px"
                      tabindex="10026"
                    />
                  </div>

                  <div
                    v-show="btnValue2"
                    class="button type2"
                    @click="btnUpdate(form.cat_code)"
                    id="uniform-undefined"
                  >
                    <span> Update </span>

                    <input
                      type="button"
                      value="edit"
                      class="type2"
                      style="opacity: 0; width: 63px"
                      tabindex="10026"
                      data-bs-dismiss="modal"
                    />
                  </div>

                  <div class="button type2" id="uniform-undefined">
                    <span>Close</span>

                    <input
                      type="button"
                      value="clear"
                      class="type2"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      @click="btnClear()"
                      style="opacity: 0; width: 63px"
                      tabindex="10026"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Menu from "./Menu_Category.vue";
import Header from "..//Header.vue";
import { ref, reactive, watch, computed, onMounted } from "vue";
import pagination from "laravel-vue-pagination";
import useCategory from "../../componentJS/category";
const btnValue1 = ref(false);
const btnValue2 = ref(false);
const disabled = ref(true);
window.Menu = "Category";
const {
  updateCategory,
  DeleteCategory,
  createCategory,
  getCategory,
  Categories,
  form,
  search,
} = useCategory();
const btnSave = async () => {
  createCategory(form);
  getCategory();
};
const btnEdit = async (Category) => {
  form.cat_code = Category.cat_code;
  form.cat_name = Category.cat_name;
  form.cat_name_2 = Category.cat_name_2;
  form.inactived = Category.inactived;
  btnValue2.value = true;
  btnValue1.value = false;
  disabled.value = true;
};

const btnUpdate = async (x) => {
  updateCategory(x, form);
  getCategory();
};
const btnDelete = async (id) => {
  DeleteCategory(id);
  getCategory();
};
const btnAdd = async () => {
  form.cat_code = "";
  form.cat_name = "";
  form.cat_name_2 = "";
  form.inactived = "";
  btnValue1.value = true;
  btnValue2.value = false;
  disabled.value = false;
};
</script>
 
