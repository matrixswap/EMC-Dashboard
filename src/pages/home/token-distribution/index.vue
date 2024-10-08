<template>
  <div class="content">
    <SectionHeader>Distribution of Tokens</SectionHeader>
    <div class="content-body">
      <div class="chart-container">
        <Pie :data="data" />
      </div>
      <div class="chart-badges">
        <div class="chart-badges-scroller">
          <NScrollbar style="height: 100%" trigger="hover">
            <div class="pie-badge">
              <template v-for="item in data">
                <div class="pie-badge-item">
                  <div class="pie-badge-item-row-1">
                    <div class="pie-badge-item-color" :style="{ 'background-color': item.color }"></div>
                    <span class="pie-badge-item-text">{{ item.name }}</span>
                  </div>
                  <div class="pie-badge-item-row-2">
                    <span class="pie-badge-item-value">{{ formatNumber(item.value) }}</span>
                    <span class="pie-badge-item-unit">&nbsp;EMC</span>
                  </div>
                </div>
              </template>
            </div>
          </NScrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { NScrollbar } from 'naive-ui';
import SectionHeader from '@/components/section-header.vue';
import Pie from './pie/index.vue';
import { formatNumber } from '@/tools/format-number';

const data = ref([
  { value: 200000000, name: 'Transaction Reward', color: '#5470c6' },
  { value: 150000000, name: 'Foundation/Treasury', color: '#91cc75' },
  { value: 150000000, name: 'Founding Developer Team', color: '#fac858' },
  { value: 150000000, name: 'Developer Reward', color: '#ee6666' },
  { value: 100000000, name: 'Public Sale', color: '#73c0de' },
  { value: 100000000, name: 'Node Reward', color: '#3ba272' },
  { value: 100000000, name: 'VC Investors', color: '#fc8452' },
  { value: 20000000, name: 'Governance Reward', color: '#9a60b4' },
  { value: 30000000, name: 'Airdrop', color: '#ea7ccc' },
]);
</script>

<style scoped>
.content {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px 0;
}

.content-body {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 0 16px;
}

.chart-container {
  width: 60%;
  padding-top: 60%;
  position: relative;
}

.chart-badges {
  width: 40%;
  min-width: 140px;
  padding-top: 60%;
  position: relative;
}

.chart-badges-scroller {
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.pie-badge {
  background-color: rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 12px 0;
}

.pie-badge-item {
  display: flex;
  flex-direction: column;
  gap: 8px 0;
}

.pie-badge-item-row-1,
.pie-badge-item-row-2 {
  display: flex;
  flex-direction: row;
  line-height: 1;
}

.pie-badge-item-row-2 {
  padding-left: 10px;
  align-items: center;
}

.pie-badge-item-color {
  width: 2px;
  height: 12px;
  border-radius: 2px;
  margin-right: 8px;
}

.pie-badge-item-text {
  flex: 1;
  width: 0;
  font-size: 12px;
  font-weight: 400;
  color: #eeddff;
}

.pie-badge-item-value {
  font-family: Oxanium;
  font-size: 14px;
  font-weight: 500;
}

.pie-badge-item-unit {
  color: #69656f;
  font-size: 12px;
  font-weight: 500;
}

@media (min-width: 640px) {
  .content {
    gap: 16px 0;
  }
  .pie-badge {
    padding: 16px;
    gap: 12px 0;
  }

  .pie-badge-item {
    gap: 8px 0;
  }

  .pie-badge-item-value {
    font-size: 16px;
  }
}
</style>
