<template>
  <div id="header">
    <ol id="topicPath">
      <li id="tpHome">
         <router-link to="/">
        <a href="/menu/index"><img alt="" height="28" src="img/topicPath_home.png" width="28">
        </a>
      </router-link>
      </li>
    </ol>
    <div id="headInfo">
      <div id="date-info">
        <span class="icon"></span>
        <p id="todays" _msttexthash="73827" _msthash="3"
          :original-title="currentTime.toLocaleTimeString('en-US', { timeStyle: 'short' })"
          class="title-tip title-tip-left">{{ currentTime.toLocaleDateString() }}
        </p>
      </div>
      <div id="user-info">
        <span class="icon"></span>
        <p id="userName">
          <font _mstmutation="1" _msttexthash="83031" _msthash="4">system </font><a href="/login/logout" id="btnlogout"
          original-title="Logout" _msttexthash="82680" _msthash="5">logout</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script type="module">
import { useCurrentTime } from "../componentJS/date";
export default {
  data() {
    return {
      Menu: window.Menu
    }
  },
  setup() {
    const { currentTime } = useCurrentTime();
    return { currentTime };
  },
};
window.Menu = "Menu";
</script>
