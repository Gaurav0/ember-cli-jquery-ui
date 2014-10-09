module.exports = {
    normalizeEntityName: function() {},
    afterInstall: function() {
        var _this = this;
        return this.addBowerPackageToProject('brocolli-static-compiler').then(function () {
            return _this.addBowerPackageToProject('jquery-ui');
        });
    }
};