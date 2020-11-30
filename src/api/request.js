export const login = () => {
    return `/comm/login`
}
export const logout = () => {
    return '/comm/logout'
}
export const code = () => {
    return '/comm/code'
}
export const addImageFile = () => {
    return '/product/addImageFile'
}
export const user = () => {
    return '/user/manager/getAllUserInfo'
}
export const userEdit = () => {
    return '/user/supper/update'
}
export const userAdd = () => {
    return '/user/supper/add'
}
export const userDel = username => {
    return `/user/supper/remove/${username}`
}

export const product = () => {
    return '/product-type/getAll'
}

export const productId = id => {
    return `/product/get/${id}`
}

export const productAdd = () => {
    return `/product/add`
}

export const productEdit = () => {
    return `/product/update`
}
export const getCountDetails = () => {
    return `/browse-count/getCountDetails`
}
export const getProutIdByType = () => {
    return `/form/getProutIdByType`
}

export const getFormByProutId = () => {
    return `/form/getFormByProutId`
}