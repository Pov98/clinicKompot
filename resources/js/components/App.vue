<template >
  <div class="wrapper">
    <div class="container-fuild">
      <div id="headTitle">
      <div id="logo"><img alt="Healthbook" height="44" src="img/logo.png" width="70" _mstalt="155922" _msthash="1">
      </div>
      <h1 id="title" _msttexthash="48503" _msthash="2">Home</h1>
    </div>
    </div>
    <Header />
    <div id="contents">
      <div id="menu">
        <ul class="clearfix">
          <li>
            <dl>
              <dt>
                <router-link to="/viewproduct">
                  <img
                    alt="タックシール印刷"
                    height="168"
                    src="img/icon-product.png"
                    width="168"
                  />
                </router-link>
              </dt>
              <dd>
                <span>Products Stock</span>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <router-link to="/menuclinic">
                  <img
                    alt="タックシール印刷"
                    height="168"
                    src="img/icon-pharmacy.png"
                    width="168"
                  />
                </router-link>
              </dt>
              <dd>
                <span>Pharmacy</span>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <router-link to="/menumedical">
                  <img
                    alt="タックシール印刷"
                    height="168"
                    src="img/icon-clinic.png"
                    width="168"
                  />
                </router-link>
              </dt>
              <dd>
                <span>POS</span>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <router-link to="/laboratory">
                  <img
                    alt="タックシール印刷"
                    height="168"
                    src="img/icon-clinic.png"
                    width="168"
                  />
                </router-link>
              </dt>
              <dd>
                <span>Laboratory</span>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import Header from "../components/Header.vue";
</script>

