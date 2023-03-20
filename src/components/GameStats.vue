<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import 'firebase/auth';
  import 'firebase/firestore';
  import { doc } from 'firebase/firestore';

  import { db } from '../firebase/init.js'
  const gs = doc(db, 'gameStats/user')

const router = useRouter();
</script>

<template>
  <h1>Game Statistics</h1>
  <router-view />
</template>