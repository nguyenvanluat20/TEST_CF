let data = [] // danh sách các đội bóng
data.sort((a, b) => {
    if (a.points < b.points) return 1
    else if (a.points > b.points) return -1
    else {
        if (a.GD < b.GD) return -1
        else if (a.GD > b.GD) return 1
        else {
            if (a.name < b.name) return -1
            else if (a.name > b.name) return 1
        }
    }
})