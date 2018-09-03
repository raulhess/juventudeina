<template>
  <div>
    <q-page class="q-pa-md">
      <q-card>
        <q-card-media style="height:200px;">
            <img src="http://cdn.gospelherald.com/data/images/full/21659/china.jpg"/>
        </q-card-media>
        <q-card-title link>
          <a class="text-primary" style="text-decoration: none;" href="#">House Church in China Refuses to Obey Authorities Despite Persecution: 'Our Faith is Ruled by God'</a>
        </q-card-title>
        <q-card-main>
          A house church in China has refused to succumb to the demands of authorities despite facing continued harassment for refusing to install cameras in the building.
        </q-card-main>
        <q-card-actions>
            <q-chip>31/08/18</q-chip>
            <q-btn dense flat color="secondary" class="q-mx-md">
              Continuar lendo...
            </q-btn>
        </q-card-actions>
      </q-card>
      <br />
      <q-card>
        <q-card-media style="height:200px;">
            <img src="http://cdn.gospelherald.com/data/images/full/23202/ccp-strictly-forbids-christians-evangelizing-to-minors.png"/>
        </q-card-media>
        <q-card-title link>
          <a class="text-primary" style="text-decoration: none;" href="#">Henan Government Draws ‘Red Line’ Hinders Christian Development</a>
        </q-card-title>
        <q-card-main>
          The Chinese government continues to regulate religious activities within the borders and gives out orders to strictly forbid the Christian community in Henan to evangelize to minors. By doing so, the Henan government draws “a red line” to hinder
        </q-card-main>
        <q-card-actions>
            <q-chip>31/08/18</q-chip>
            <q-btn dense flat color="secondary" class="q-mx-md">
              Continuar lendo...
            </q-btn>
        </q-card-actions>
      </q-card>
    </q-page>
    <q-layout-drawer
      side="right"
      v-model="rightDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
    <q-card flat color="secondary" class="q-ma-sm" style="border: solid 1px #DEDEDE;">
      <q-card-main>
        Agenda da Semana
      </q-card-main>
      <q-list class="bg-white text-black q-pa-none">
        <q-item>
          <q-item-side icon="date_range" color="light-blue-8"/>
          <q-item-main label="06/09/18"/>
        </q-item>
        <q-item>
          <q-item-side>
            <q-chip style="text-align:center;">19:30</q-chip>
          </q-item-side>
          <q-item-main>
            Saída para o retiro da INA
          </q-item-main>
        </q-item>
        <q-item-separator/>
        <q-item>
          <q-item-side icon="date_range" color="light-blue-8"/>
          <q-item-main label="09/09/18"/>
        </q-item>
        <q-item>
          <q-item-side>
            <q-chip style="text-align:center;">09:30</q-chip>
          </q-item-side>
          <q-item-main>
            Chegada na igreja do retiro
          </q-item-main>
        </q-item>
        <q-item-separator/>
        <q-item>
          <q-item-side icon="date_range" color="light-blue-8"/>
          <q-item-main label="15/09/18"/>
        </q-item>
        <q-item>
          <q-item-side>
            <q-chip style="text-align:center;">18:00</q-chip>
          </q-item-side>
          <q-item-main>
            Culto dos Adoles
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-side>
            <q-chip style="text-align:center;">19:30</q-chip>
          </q-item-side>
          <q-item-main>
            Culto dos Jovens
          </q-item-main>
        </q-item>
      </q-list>
    </q-card>
    <q-alert color="grey-8" icon="info" class="q-ma-sm">
      Nesse final de semana a reunião de jovens e adoles será junto às 19 horas
    </q-alert>
    <q-alert type="warning" class="q-ma-sm">
      Precisamos de ajuda com evento X, quem puder ajudar entre em contato com ...
    </q-alert>
    </q-layout-drawer>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      rightDrawerOpen: true
    }
  }
}
</script>
