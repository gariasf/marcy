const Player = {
    init: function() {
        this.audio = new Audio()
    },

    play: function() {
        this.audio.play()
    },

    getAudio: function() {
        return this.audio
    },

    getSrc: function() {
        return this.audio.src
    },

    setAudioSrc: function(src) {
        this.audio.src = src
    }
}

export default Object.create(Player)
