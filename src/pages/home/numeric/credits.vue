<template>
  <NumericBasic :title="title" :unit="unit" :value="value" :tips="tips" :loading="loading" :icon="Icon" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

import Icon from './icons/compute-power.png';
import { http } from '@/tools/http';
import NumericBasic from './basic-simple.vue';
import { formatNumber } from '@/tools/format-number';
const title = ref('Credit Consumption');
const value = ref('');
const unit = ref('');
const tips = ref('');
const loading = ref(false);
onMounted(async () => {
  loading.value = true;
  const resp = await http.get({ url: 'https://openapi.emchub.ai/emchub/api/client/open/queryCreditSum', noAutoHint: true });
  loading.value = false;
  const data = resp.data || {};
  value.value = formatNumber(data.credit || 0);
});
</script>

<style scoped></style>
