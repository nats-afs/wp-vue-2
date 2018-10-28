import Vue from 'vue';
import Vuex from 'vuex';
import { orgRef } from '../config/firebaseConfig'
import moment from "moment";
Vue.use(Vuex);

export const SET_ORG = 'SET_ORG'
export const store = new Vuex.Store({
  state: {
    org: {},
    linksHeaderMovil: [],
    linksNavMovil: [],
    linksNav: [
      { name: "Inicio", path: "/" },
      { name: "Noticias", path: "/news" },
      { name: "Directorio", path: "/" },
      { name: "Eventos", path: "/events" },
      { name: "Galeria", path: "/gallery"},
      { name: "Documentos", path: "/" }
    ],
    linksHeader: [{
        name: 'Distrito',
        icon: 'fa fa-fw fa-institution',
        ref: 'dist-dropdown',
        children: [
          { name: 'Creacion Politica', path: '/distrito/creacion' },
          { name: 'Historia', path: '/distrito/historia' },
          { name: 'Turismo', path: '/distrito/turismo' },
          { name: 'Ecologia', path: '/distrito/ecologia' }
        ]
      },
      {
        name: 'Municipalidad',
        icon: 'fa fa-fw fa-building-o',
        ref: 'muni-dropdown',
        children: [
          { name: 'Alcalde', path: '/municipalidad/alcalde' },
          { name: 'Teniente Alcalde', path: '/municipalidad/teniente-alcalde' },
          { name: 'Regidores', path: '/municipalidad/regidores' },
          { name: 'Funcionarios', path: '/municipalidad/funcionarios' },
          { name: 'Mision - Vision', path: '/municipalidad/mision-vision' }
        ]
      },
      {
        name: 'Servicios',
        icon: 'fa fa-fw fa-smile-o',
        ref: 'serv-dropdown',
        children: [
          { name: 'Consultas en Linea', path: '/servicios/servicio-1' },
          { name: 'Tramite en Linea', path: '/servicios/servicio-2' },
        ]
      },
      {
        name: 'Mas',
        icon: 'fa fa-fw fa-plus',
        ref: 'mas-dropdown',
        children: [
          { name: 'Mas 1', path: '/mas/mas-1' },
          { name: 'Mas 2', path: '/mas/mas-2' }
        ]
      }
    ]
  },
  getters: {
    getOrg: (state) => {
      return state.org;
    },
    getTitle: (state) => {
      return state.org.name;
    },
    getSlogan: (state) => {
      return state.org.slogan;
    },
    getAlcalde: (state) => {
      return state.org.alcalde;
    },
    getLogo:(state) => {
      return state.org.imageValue
    },
    getCopyright: (state) => {
      return "Av. San Martin N° 2860 - Santa Eulalia - Huarochirí - Perú Telf:(01)361-2858 ©" + moment().year() + " " + state.org.name
    },
    getRedesSociales: (state) => {
      return state.org.redes
    },
    getLinksHeader: (state) => {
      return state.linksHeader;
    },
    getLinksNav: (state) => {
      return state.linksNav;
    },
    getLinksHeaderMovil: (state) => {
      state.linksHeaderMovil = state.linksHeader;
      return state.linksHeaderMovil;
    },
    getLinksNavMovil: (state) => {
      state.linksNavMovil = state.linksNav;
      return state.linksNavMovil;
    }
  },
  mutations: {
    [SET_ORG]: (state, org) => {
      state.org = org
    }
  },
  actions: {
    fetchOrg(context) {
      return orgRef.on('value', snapshot => {
        context.commit(SET_ORG, snapshot.val())
      })
    }
  }
});
