export const decodeShopifyGID = (gid) => {
    try {
        const decoded = atob(gid);
        return decoded.replace(/^gid:\/\//, ''); // Clean up the prefix if needed
    } catch (error) {
        console.error("Invalid Base64 string:", gid);
        return null;
    }
};

export const getRating = (metafields) => {
    const ratingMetafield = metafields.find((metafield) => metafield?.key === 'rating');
    return ratingMetafield ? ratingMetafield.value : null;
};

export const getRatingCount = (metafields) => {
    const ratingCountMetafield = metafields.find((metafield) => metafield?.key === 'rating_count');
    return ratingCountMetafield ? ratingCountMetafield.value : null;
};