const queueList = document.getElementById('sortable');

for (const show of queueList.children)
	setupButtons(show);

function setupButtons(show) {
	const content = show.querySelector('.queue-item-content');

	const buttonHolder = document.createElement('div');
	buttonHolder.className = 'episode-buttons';

	for (const favoriteImg of content.querySelectorAll('.favorite-status'))
		buttonHolder.append(favoriteImg);

	buttonHolder.append(getFeedlyButton(show));

	content.prepend(buttonHolder);
}

function getFeedlyButton(show) {
	const feedlyLink = 'https://feedly.com/i/subscription/feed';

	const episodeURL = show.querySelector('.anchor-to-episode').href;
	const seriesURL = episodeURL.substr(0, episodeURL.indexOf('/episode-'));

	const anchor = document.createElement('a');
	anchor.href = feedlyLink + '/' + seriesURL + '.rss';
	anchor.target = 'blank';

	const img = document.createElement('img');
	img.src = chrome.runtime.getURL('images/feedly-follow-feedlyshape-orange.png');
	img.alt = 'Follow on Feedly';
	img.width = 21;
	img.height = 21;

	anchor.append(img);

	return anchor;
}