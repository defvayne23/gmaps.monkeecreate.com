jQuery(function() {
	$('.js-simpleGH').each(function() {
		var el = $(this);
		var repo = el.data('repo'); //monkeecreate/jquery.simpleWeather

		$.when(
			$.ajax({
				url: 'https://api.github.com/repos/'+repo,
				dataType: 'jsonp'
				// localCache: true,
				// cacheTTL: 5
			}),
			$.ajax({
				url: 'https://api.github.com/repos/'+repo+'/tags',
				dataType: 'jsonp'
				// localCache: true,
				// cacheTTL: 5
			})
		).done(function(repoData, repoTags) {
			var data = repoData[0].data;
			var tag = repoTags[0].data[0];
			var html = '';
      var list = $('<ul></ul>');

      console.log(data);
      console.log(repoTags);

			if(tag)
				html += '<div class="release"><i class="fa fa-rocket fa-lg"></i> <span>'+tag.name+'</span></div>';
      else
        html += '<div class="release"><i class="fa fa-rocket fa-lg"></i> <span class="release">v3.0.0</span></div>';

			if(data.stargazers_count)
				list.append('<li><i class="fa fa-star fa-fw"></i> Stars: <span class="stars">'+data.stargazers_count+'</span></li>');

			if(data.forks_count)
				list.append('<li><i class="fa fa-code-fork fa-fw"></i> Forks: <span class="forks">'+data.forks_count+'</span></li>');

      list.append('<li><i class="fa fa-bug fa-fw"></i> Issues: <span class="issues">'+data.open_issues+'</span></li>');

      html += '<a href="'+data.url+'" target="_blank">View on Github</a> | <a href="'+data.downloads_url+'" target="_blank">Download from Github</a>';

			$(el).prepend(html).prepend(list);
		});
	});
});
