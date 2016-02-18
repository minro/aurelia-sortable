define(["require", "exports"], function (require, exports) {
    "use strict";
    var Welcome = (function () {
        function Welcome() {
            this.cards = new Array();
        }
        Welcome.prototype.activate = function () {
            this.spawnItems();
        };
        Welcome.prototype.spawnItems = function () {
            var i = 1;
            for (var j = 0; j < 50; j++) {
                this.cards.push({
                    id: j
                });
            }
        };
        return Welcome;
    }());
    exports.Welcome = Welcome;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFFQTtRQUFBO1lBQ0ksVUFBSyxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7UUFlN0IsQ0FBQztRQVpHLDBCQUFRLEdBQVI7WUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDckIsQ0FBQztRQUVELDRCQUFVLEdBQVY7WUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDVixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDYixFQUFFLEVBQUUsQ0FBQztpQkFDUCxDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQWhCQSxBQWdCQyxJQUFBO0lBaEJZLGVBQU8sVUFnQm5CLENBQUEiLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHtjb21wdXRlZEZyb219IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuZXhwb3J0IGNsYXNzIFdlbGNvbWUge1xuICAgIGNhcmRzID0gbmV3IEFycmF5PGFueT4oKTtcbiAgICBcbiAgICBcbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5zcGF3bkl0ZW1zKClcbiAgICB9ICAgXG4gICAgXG4gICAgc3Bhd25JdGVtcygpIHtcbiAgICAgICAgdmFyIGkgPSAxO1xuICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgNTA7IGorKykge1xuICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKHtcbiAgICAgICAgICAgICAgIGlkOiBqIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
