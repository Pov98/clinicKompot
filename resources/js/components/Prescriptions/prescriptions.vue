<template>
    <div class="wrapper">
        <div class="container-fuild">
            <div id="headTitle">
                <div id="logo">
                    <img alt="Healthbook" height="44" src="img/logo.png" width="70" mstalt="155922" _msthash="1" />
                </div>
                <h1 id="title" _msttexthash="48503" _msthash="2">
                    Prescription
                </h1>
            </div>
        </div>
        <div class="container-fuild">
            <Header />
            <ol id="topicPath">
                <li style="margin-left: 315px">
                    <router-link to="">
                        <a href="dashbaord">
                            <font style="vertical-align: inherit"></font>
                            <font style="vertical-align: inherit">
                                Prescription
                            </font>
                        </a>
                    </router-link>
                </li>
            </ol>

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
                                    data-bs-target="#staticboomId" tabindex="10028"><i class="fa fa-print"
                                        aria-hidden="true"></i> Print</a>
                            </li>
                            <li>
                                <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdropss"
                                    tabindex="10028" href="#"><i class="fas fa-file-excel"></i> To Excel</a>
                            </li>
                            <li>
                                <a class="dropdown-item btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#staticBackdropss" tabindex="10028"><i class="fas fa-edit"></i>
                                    Release</a>
                            </li>
                        </ul>
                        <div class="search-box-title">
                            <router-link to="patientRegister">
                                <a class="btn-radius btn btn-sm" href="#"
                                    style="color: #f8f5b4; margin-top: -2px; color: #dbdee1">
                                    <i class="fa fa-id-card"> </i>
                                    <!-- <i class="fa-solid fa-id-card"></i> -->
                                    Register Patient
                                </a>
                            </router-link>
                        </div>

                        <input id="search" name="search" type="hidden" value="1" />
                        <input id="search" name="search" type="hidden" value="1" />
                        <div class="search-box-content">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" class="tbl_search"
                                id="hover-table">
                                <tbody>
                                    <tr>
                                        <th width="10%">Prescription ID</th>
                                        <td width="90%">
                                            <input class="string_zen_kana clear_text text" size="50" type="text"
                                                tabindex="10000" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th width="10%">Patient's ID</th>
                                        <td width="90%" colspan="3">
                                            <input class="string_zen_kana clear_text text" name="PrefixCode" size="20"
                                                type="text" tabindex="10001" />
                                            Patient's Name
                                            <input class="string_zen_kana clear_text text" name="PrefixCode" size="30"
                                                type="text" tabindex="10001" />
                                            Sex
                                            <input class="string_zen_kana clear_text text" name="PrefixCode" size="10"
                                                type="text" tabindex="10001" />
                                            Age
                                            <input class="string_zen_kana clear_text text" name="PrefixCode" size="10"
                                                type="text" tabindex="10001" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th width="10%">Medical history</th>
                                        <td width="90%">
                                            <textarea class="string_zen_kana clear_text text" id="search_word_simei_kana_s"
                                                name="search_word[simei_kana_s]" type="text" tabindex="10015" rows="1"
                                                style="width: 36%; outline: none;"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th width="10%">Allergies</th>
                                        <td width="90%">
                                            <textarea class="string_zen_kana clear_text text" id="search_word_simei_kana_s"
                                                name="search_word[simei_kana_s]" type="text" tabindex="10015" rows="1"
                                                style="width: 36%; outline: none;"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th width="10%">Test Type</th>
                                        <td width="90%">
                                            <div class="dropdown d-flex">
                                                <button @click="getunit(form)" @onmouseout="prooductboom()"
                                                    class="dropdown-toggle string_zen clear_text text select-menu"
                                                    type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                    aria-expanded="false" size="50">

                                                    {{ form.stock_unit_of_measure_code }}
                                                    <i class="fa fa-chevron-down"></i>
                                                </button>
                                                <div class="dropdown-menu each-drop-menu"
                                                    aria-labelledby="dropdownMenuButton1">
                                                    <p>
                                                        <input v-model="txtsearch" @input="searchproduct(txtsearch)"
                                                            class="string_zen clear_text text search-pro-field" size="50"
                                                            type="text" />
                                                    </p>
                                                    <ul style="list-style: none" class="scrollable-menu">
                                                        <li>
                                                            <div class="menu-item">
                                                                <p>Products</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="menu-item">
                                                                <p>Service</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="menu-item">
                                                                <p>Material</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th width="10%">Date</th>
                                        <td width="90%">
                                            <input class="string_zen_kana clear_text text" name="QtyCode" size="50"
                                                type="date" tabindex="10001" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th width="10%">BP</th>
                                        <td width="90%">
                                            <input class="string_zen_kana clear_text text" name="QtyCode" size="20"
                                                type="text" tabindex="10001" />
                                            Pr
                                            <input class="string_zen_kana clear_text text" name="QtyCode" size="20"
                                                type="text" tabindex="10001" />
                                            RR
                                            <input class="string_zen_kana clear_text text" name="QtyCode" size="20"
                                                type="text" tabindex="10001" />
                                            Spo2
                                            <input class="string_zen_kana clear_text text" name="QtyCode" size="20"
                                                type="text" tabindex="10001" />
                                            T
                                            <input class="string_zen_kana clear_text text" name="QtyCode" size="20"
                                                type="text" tabindex="10001" />

                                        </td>
                                    </tr>
                                    <tr>
                                        <th width="10%">Appointment Date</th>
                                        <td width="90%">
                                            <input class="string_zen_kana clear_text text" name="QtyCode" size="50"
                                                type="date" tabindex="10001" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th width="10%">Remark</th>
                                        <td width="90%">
                                            <textarea class="string_zen_kana clear_text text" id="search_word_simei_kana_s"
                                                name="search_word[simei_kana_s]" type="text" tabindex="10015" rows="1"
                                                style="width: 36%; outline: none;"></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="search-box-footer">
                                <div class="button type2" id="uniform-undefined">
                                    <span>Save</span>
                                    <input type="button" value="save" class="type2" @click="save()"
                                        style="opacity: 0; width: 63px" tabindex="10026" />
                                </div>
                                <div class="button type2" id="uniform-undefined">
                                    <span>Clear</span>
                                    <input type="button" value="clear" class="type2" @click="clear()"
                                        style="opacity: 0; width: 63px" tabindex="10026" />
                                </div>
                                <div class="button type2" id="uniform-undefined" data-bs-toggle="modal"
                                    data-bs-target="#staticboomId">
                                    <span>Open</span>
                                    <input type="button" value="clear" class="type2" style="opacity: 0; width: 63px"
                                        tabindex="10026" />
                                </div>
                                <span class="marker"></span>
                            </div>

                        </div>

                        <div class="box" style="margin-top:25px">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" class="tbl_list tbl_stripe">
                                <thead>
                                    <tr>
                                        <th>Prescription ID</th>
                                        <th>Product No</th>
                                        <th>Product Type</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->

    <div class="modal fade ui-modal" id="staticboomId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticboomId" aria-hidden="true">
        <div class="modal-dialog " style="max-width: 200vh !important;">
            <div class="modal-content ui-dialog">
                <div class="ui-widget-header">
                    <p>Service Test</p>
                    <span class="ui-icon ui-icon-closethick" data-bs-dismiss="modal" aria-label="Close"></span>
                </div>
                <div class="serH">
                    <ul style="display: flex;">
                        <li>
                            <p style="color:white; padding-top: 2px; width:38vh;margin-left: 0.5rem;">Title </p>
                        </li>
                        <li>
                            <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                name="search_word[simei_s]" type="text" tabindex="10017"
                                style="margin-left: 0; margin-right: 0;">
                        </li>
                        <li>
                            <p style="color:white; padding-top: 2px;  width:38vh; margin-left: 0.5rem;">Title </p>
                        </li>
                        <li>
                            <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                name="search_word[simei_s]" type="text" tabindex="10017"
                                style="margin-left: 0; margin-right: 0;">
                        </li>
                    </ul>
                    <!-- <ul style="display: flex;">
                        <li id="rol">
                            <p style="color:white;">Title </p>
                        </li>
                        <li id="rol">
                            <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                name="search_word[simei_s]" type="text" tabindex="10017"
                                style="margin-left: 0; margin-right: 0;">
                        </li>
                    </ul>
                    <ul style="display: flex;">
                        <li id="rol">
                            <p style="color:white;">Title </p>
                        </li>
                        <li id="rol">
                            <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                name="search_word[simei_s]" type="text" tabindex="10017"
                                style="margin-left: 0; margin-right: 0;">
                        </li>
                    </ul> -->
                </div>
                <div class="ui-dialog-content" id="ser">
                    <div class="col-4 ser-1">
                        <div class="ser-2">
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-4 ser-1">
                        <div class="ser-2 ">
                            <h2>Title</h2>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <p>pov nakry</p>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <h2>Title</h2>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul style=" background-color:#6db7bf;">
                                <li id="rol">
                                    <p style="color:white;">Title </p>
                                </li>
                                <li id="rol">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:99%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul style=" background-color:#6db7bf;">
                                <li id="rol">
                                    <p style="color:white;">Title </p>
                                </li>
                                <li id="rol">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:99%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-4 ser-1">
                        <div class="ser-2">
                            <h2>Title</h2>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul>
                                <li id="rol" style="border-bottom:0.5px solid #ccc;">
                                    <input type="checkbox" name="" id="">
                                    <label for="">love u</label>
                                </li>
                                <li id="rol">
                                    <select name="" id="">
                                        <option value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:30%;margin-left: 0; margin-right: 0;">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:35%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                            <ul style=" background-color:#6db7bf;">
                                <li id="rol">
                                    <p style="color:white;">Title </p>
                                </li>
                                <li id="rol">
                                    <input class="string_zen clear_text text" id="search_word_simei_s ser-2"
                                        name="search_word[simei_s]" type="text" tabindex="10017"
                                        style="width:99%;margin-left: 0; margin-right: 0;">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Header from '../Header.vue'
import axios from "axios";
export default {
    name: "prescriptions",
    components: { Header },
    data() {
        return {
            form: {
                sex: 'Both'
            },
            labo: 20,

        }
    },
    mounted() {
        this.checkedActive()
    },
    methods: {
        checkedActive() {
            var items = document.querySelectorAll(".radio > span")
            console.log(items.length)
            for (let i = 0; i < items.length; i++) {
                items[i].addEventListener('click', function () {
                    let currentBtn = document.querySelectorAll('.checked')
                    currentBtn[0].className = currentBtn[0].className.replace('checked', '')
                    this.className += " checked"
                })
            }
        },
        getsex(sex) {
            if (sex == 'both') {
                this.form.sex = "Both"
                console.log(this.form.sex)
            }
            else if (sex == 'male') {
                this.form.sex = 'Male'
                console.log(this.form.sex)
            }
            else {
                this.form.sex = 'Female'
                console.log(this.form.sex)
            }
        }
    }
};
</script>