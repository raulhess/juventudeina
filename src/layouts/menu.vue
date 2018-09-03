<template>
  <q-layout view="hhh lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Juventude INA
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      side="left"
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        inset-delimiter
      >
        <q-item link exact to="/">
          <q-item-side icon="home" />
          <q-item-main label="Página Inicial"/>
        </q-item>
        <q-item link to="/news">
          <q-item-side icon="web" />
          <q-item-main label="Novidades"/>
        </q-item>
        <q-item link to="/schedule">
          <q-item-side icon="date_range" />
          <q-item-main label="Agenda" />
        </q-item>
        <q-item link to="/forum">
          <q-item-side icon="forum" />
          <q-item-main label="Fórum" />
        </q-item>
        <q-item link to="/notifications">
          <q-item-side icon="notifications" />
          <q-item-main label="Notificações" />
        </q-item>
        <q-item-separator></q-item-separator>
        <q-item>
          <q-item-main sublabel="Nos siga nas redes sociais:">
            <q-btn color="grey-7" size="lg" dense inverted flat icon="ion-logo-facebook"></q-btn>
            <q-btn color="grey-7" size="lg" dense inverted flat icon="ion-logo-instagram"></q-btn>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main sublabel="© 2018 Igreja Evangélica Menonita Nova Aliança"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
