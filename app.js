var app = new Vue({
    el: '#app',
    data: {
        containerObject: {
            justifyContent: 'flex-start',
        },
        currentStyle: 'flex-start'
    },
    methods: {
        flexEnd() {
            this.containerObject.justifyContent = 'flex-end'
            this.currentStyle = 'flex-end'
        },
        flexStart() {
            this.containerObject.justifyContent = 'flex-start'
            this.currentStyle = 'flex-start'
        },
        center() {
            this.containerObject.justifyContent = 'center'
            this.currentStyle = 'center'
        },
        spaceBetween() {
            this.containerObject.justifyContent = 'space-between'
            this.currentStyle = 'space-between'
        },
        spaceAround() {
            this.containerObject.justifyContent = 'space-around'
            this.currentStyle = 'space-around'
        },
        spaceEvenly() {
            this.containerObject.justifyContent = 'space-evenly'
            this.currentStyle = 'space-evenly'
        }
    }
})