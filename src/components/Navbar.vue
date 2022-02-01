<template>
    <div class="navbar bg-blue-900 text-white py-3">
        <div class="container flex justify-evenly">
            <div class="left">
                <a href="/" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Surxon Servis</a>
            </div>
            <div class="center">
                <a href="/about" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Biz haqimizda</a>
                <a href="/leadership" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Rahbariyat</a>
                <a href="/merchandise" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Tovarlar</a>
                <a href="/servis" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Xizmat va Servislar</a>
                <a href="/chain" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Hududiy filiallar</a>
            </div>
            <div class="right flex">
                <SearchIcon class="h-6 text-red-400" />
                <div class="languages">
                    <select name="languages" id="languages">
                        <option value="Uzlotin">O'zbekcha</option>
                        <option value="Uzkiril">Ўзбекча</option>
                        <option value="Ru">Русский</option>
                    </select>
                </div>
                <MoonIcon class="button h-6 text-blue-500" />
                <SunIcon class="h-6 text-blue-500" />
            </div>
        </div>
    </div>
</template>

<script>
import { SearchIcon } from "@heroicons/vue/outline"
// import { ChevronDownIcon } from "@heroicons/vue/outline"
import { SunIcon } from "@heroicons/vue/outline"
import { MoonIcon } from "@heroicons/vue/outline"



export default {
    components: {
        // ChevronDownIcon,
        SunIcon,
        MoonIcon,
        SearchIcon
    }
}

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

select {
    background: transparent;
}

select:focus {
    background: #1e3a8a;
}

select:hover,
select:focus {
    outline: none;
}

</style>