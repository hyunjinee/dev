<template>
    <div class="text-center">
        안뇽
    </div>
</template>


<script>
import { computed } from 'vue'
import dayjs from 'dayjs'
export default {
    name: 'DataTitle',
    props: ['text', 'dataDate'],
    setup ({dataDate}) {
        return {
            timestamp: computed(()=> dayjs(dataDate))
            .format('MMMM D YYYY, h:mm:ss a')
        }
    }
}
</script>