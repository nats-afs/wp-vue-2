import NotFound from './components/NotFound.vue';

export const routes = [
  { path: '*', component: NotFound },
  { path: '/', name: 'inicio', component: () => import('@/components/pages/home/HomeMain') },
  { path: '/gallery', name: 'gallery', component: () => import('@/components/pages/gallery/GalleryMain') },
  {
    path: '/municipalidad', name: 'municipio', component: () => import('@/components/pages/municipalidad/MunicipalidadMain'), children: [
      { path: 'alcalde', name: 'alcalde', component: () => import('@/components/pages/municipalidad/Alcalde') },
      { path: 'teniente-alcalde', name: 'teniente', component: () => import('@/components/pages/municipalidad/TenienteAlcalde') },
      { path: 'regidores', name: 'regidores', component: () => import('@/components/pages/municipalidad/Regidores') },
      { path: 'funcionarios', name: 'funcionarios', component: () => import('@/components/pages/municipalidad/Funcionarios') },
      { path: 'mision-vision', name: 'mision-vision', component: () => import('@/components/pages/municipalidad/MisionVision') },
    ]
  },
  {
    path: '/distrito', component: () => import('@/components/pages/distrito/DistritoMain'), children: [
      { path: 'creacion', component: () => import('@/components/pages/distrito/CreacionPolitica') },
      { path: 'historia', component: () => import('@/components/pages/distrito/Historia') },
      { path: 'turismo', component: () => import('@/components/pages/distrito/Turismo') },
      { path: 'ecologia', component: () => import('@/components/pages/distrito/Ecologia') },
    ]
  },
  {
    path: '/servicios', component: () => import('@/components/pages/servicios/ServicioMain'), children: [
      { path: 'servicio-1', component: () => import('@/components/pages/servicios/Servicio1') },
      { path: 'servicio-2', component: () => import('@/components/pages/servicios/Servicio2') },
    ]
  },
  {
    path: '/mas', component: () => import('./components/mas/Mas'), children: [
      { path: 'mas-1', component: () => import('./components/mas/Mas1') },
      { path: 'mas-2', component: () => import('./components/mas/Mas2') }
    ]
  },
  {
    path: '/news', component: () => import('@/components/pages/news/NewsMain'), children: [
      { path: '', component: () => import('@/components/pages/news/DefaultNew') },
      { path: ':uid', name: 'news-detail', component: () => import('@/components/pages/news/NewsDetail'), props: true }
    ]
  },
  {
    path: '/events', component: () => import('@/components/pages/events/EventsMain'), children: [
      { path: '', component: () => import('@/components/pages/events/DefaultEvent') },
      { path: ':uid', name: 'event-detail', component: () => import('@/components/pages/events/EventDetail'), props: true }
    ]
  },
  {
    path: '/places', component: () => import('@/components/pages/places/PlacesMain'), children: [
      { path: '', component: () => import('@/components/pages/places/PlaceDefault') },
      { path: ':uid', name: 'place-detail', component: () => import('@/components/pages/places/PlaceDetail'), props: true }
    ]
  }
];