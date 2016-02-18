define(["require", "exports", 'bootstrap'], function (require, exports) {
    "use strict";
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .plugin("oribella-aurelia-sortable");
        aurelia.start().then(function (a) { return a.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFHQSxtQkFBMEIsT0FBZ0I7UUFDeEMsT0FBTyxDQUFDLEdBQUc7YUFDUixxQkFBcUIsRUFBRTthQUN2QixrQkFBa0IsRUFBRTthQUNwQixNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQVF2QyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFiZSxpQkFBUyxZQWF4QixDQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQge0F1cmVsaWF9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLmRldmVsb3BtZW50TG9nZ2luZygpXG4gICAgLnBsdWdpbihcIm9yaWJlbGxhLWF1cmVsaWEtc29ydGFibGVcIik7XG5cbiAgLy9VbmNvbW1lbnQgdGhlIGxpbmUgYmVsb3cgdG8gZW5hYmxlIGFuaW1hdGlvbi5cbiAgLy9hdXJlbGlhLnVzZS5wbHVnaW4oJ2F1cmVsaWEtYW5pbWF0b3ItY3NzJyk7XG5cbiAgLy9BbnlvbmUgd2FudGluZyB0byB1c2UgSFRNTEltcG9ydHMgdG8gbG9hZCB2aWV3cywgd2lsbCBuZWVkIHRvIGluc3RhbGwgdGhlIGZvbGxvd2luZyBwbHVnaW4uXG4gIC8vYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLWh0bWwtaW1wb3J0LXRlbXBsYXRlLWxvYWRlcicpXG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oYSA9PiBhLnNldFJvb3QoKSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
