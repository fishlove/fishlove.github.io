// equal heights
function equalHeights() {
	var $col = $('.equal>*'),
		maxHeight = [],
		rows = [],
		rowTop = 0,
		rowIndex = 0;

	$col.each(function() {
        $el = $(this);
        $el.css('height', '');
        if ($el.offset().top > rowTop) {
            rowIndex++;
            rows[rowIndex] = [];
            rowTop = $el.offset().top;
            maxHeight[rowIndex] = 0;
        }
        if ($el.height() > maxHeight[rowIndex]) {
            maxHeight[rowIndex] = $el.height();
        }
        rows[rowIndex].push($el);
    });
	for (row = 1; row <= rowIndex; row++) {
			for (i = 0; i <= rows[row].length; i++) {
				$(rows[row][i]).height(maxHeight[row]);
			}
		}
}
$(window).on('resize load', equalHeights);