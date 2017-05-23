import template from './movie-result.html';
const movieResultDirect = function () {
    return {
        restrict: 'E',
        scope: {
            result: '=result'
        },
        template: template
    };
};
export default movieResultDirect;