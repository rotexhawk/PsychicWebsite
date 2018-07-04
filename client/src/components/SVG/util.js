const iconRequireObject = require.context('../../assets', true, /.*\.svg$/); // require all .svgs in the ./svg folder
const exports = (module.exports = {});
const iconList = [];

iconRequireObject.keys().forEach(path => {
    const iconName = path.substring(
        path.lastIndexOf('/') + 1,
        path.lastIndexOf('.')
    ); // find the bare name of the icon
    exports[iconName] = iconRequireObject(path);
    iconList.push(iconName);
});

exports.iconList = iconList;
