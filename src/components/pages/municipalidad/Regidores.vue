<template>
  <div class="">
    <h5>Regidores</h5>
    <div class="divider"></div>
    <div class="content">
      <div v-for="regidor in regidores" :key=regidor.index class="row">
        <div class="col s4">
          <img src="@/assets/img/funcionario.jpg" alt="" class="responsive-img">
        </div>
        <div class="col s8">
          <h4>{{regidor.name}}</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis inventore non tempora! Aspernatur fugiat consequuntur tempore dolor sequi eum sint dolore veritatis quasi mollitia suscipit recusandae, excepturi ducimus explicabo odit!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis inventore non tempora! Aspernatur fugiat consequuntur tempore dolor sequi eum sint dolore veritatis quasi mollitia suscipit recusandae, excepturi ducimus explicabo odit!</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data:()=>({
    regidores:[
    {name:'Ricardo Moisés Ku Francia'},
    {name:'Iván Darío Escobar Tornero'},
    {name:'Sonia Ofelia Mamani Huahualuque'},
    {name:'Sammy Lizbeth Estrada Ravichagua'},
    {name:'John Edward Huamán Ccancce'}
    ]
  })};
</script>
<style lang="scss" scoped>
.content{
  margin: 3em 0;
  .row{
    margin: 3em 0;
  }
}
</style>
