// Pirates!! Are the Cannons ready!??

const cannonsReady = (gunners) => {
    return Object.values(gunners).some(a => a === 'nay') ? 'Shiver me timbers!' : 'Fire!'
}