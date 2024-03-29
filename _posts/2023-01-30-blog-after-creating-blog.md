---
title: Blog - github 페이지를 이용하여 블로그를 만든 이야기
categories: 
  - Blog
tags:
  - blog
  - github page
  - jekyll
  - minimal mistake
sitemap:
  changefreq: daily
  priority : 1.0
---

## github page를 이용하여 블로그를 만든 이야기
어쩌다가 이 글을 읽게 되었다면, 당신은 아마도 블로그를 개설해야겠다고 마음을 먹었거나, 현재 블로그를 운영하고 있다거나, 블로그를 운영한 경험이 있을 것이다. 어쨌든 블로그에 관심이 있는 사람일 것이라는 말이다. 그런 당신에게 깃허브 블로그를 만들어가며 든 생각들을 공유하고자 한다. 이 글은 블로그 개설 방법을 공유하는 글은 아니다. 그런 글들은 검색하면 쉽게 다른 블로그들에서 쉽게 찾을 수 있을 것이다(혹시, minimal mistakes 테마를 사용했고, 사이드바 네이게이션에 글 수를 추가하고 싶다면, 내 블로그의 글을 참고하는 것도 도움이 될 것이다!). 이 글에는 블로그를 만들면서 겪은 경험들과 전체적인 생각들을 위주로 전달하고자 한다. 당신이 깃허브 페이지 블로그에 대한 고민을 한다면, 어쨌든 도움이 되긴 할 것이다!

### 블로그를 만들게 된 이유
이전부터 글을 쓸 수 있는 블로그를 만들고자 하는 생각은 있었지만, 블로그를 만들고 글을 쓰는 것은 꽤나 귀찮은 일이었기에 차일 피일 미루고만 있었다. 하지만, 공부한 것들을 슬슬 잊어버리면서, 내용을 정리하고 쉽게 꺼내 볼 수 있도록 해야겠다는 다각이 들었다(여기까지는 노션이면 충분하다). 추가로, 기왕이면 다른 사람한테 보여줄 수 있다면 미래의 취업에 더 도움이 될 것이라는 생각 또한 들어서 블로그를 만들게 되었다.

### 왜 깃허브 페이지를 선택했나?
이전부터 깃허브의 블로그를 이용한 블로그들이 존재하는 것은 알고 있었다. 과제나 프로젝트를 진행하며 여러 블로그들을 찾아 볼 때, 'github'가 주소에 들어가있는 블로그들을 본 적이 있기 때문이다. 그 때는 크게 관심이 있는 것은 아니지만 특이하다 정도로 생각했던 것 같다. 이후에 블로그를 만들려고 여러 플랫폼을 알아보다보니, 그것이 'Github Page'를 이용한 블로그라는 것을 알게 되었고, 매우 강력한 커스텀 기능, 마크다운으로 작성하는 포스팅 등에 이점을 느껴 선택하게 되었다. 일반적인 블로그와는 다르다는 느낌이 조금 더 매력있게 다가왔던 것 같다.

### 그 길은 험난한 길이었고...
일반적인 블로그들과 달리, 깃허프 페이지 블로그는 스스로 만들어야 한다. 깃허브 페이지 블로그를 개설하기 위해서는 공식 문서와 블로그들을 뒤져야했다. 다른 블로그들의 도움 덕분에 이 블로그를 만들 수 있었지, 공식 문서만 있었다면 포기했을 것 같다. 그런데 특이한 점은 깃허브 페이지에 대한 상당수의 글들은 velog, tistory 등과 같은 다른 블로그 플랫폼에 작성되어 있었다. 정말 많은 도움이 된 한 블로그는 자기소개에 velog로 이전하다는 안내문이 적혀 있었다. 여기서 뭔가 이상한 것을 느꼈어야 했는데! 블로그를 개설한 뒤, 블로그에 필요한 기본적인 기능을 갖추고, 아주 약간에 커스텀을 하는데는 꽤나 많은 시간이 들었다. 단순히 설정하는 것이 아니라 약간의 개발을 하고 있다는 생각까지 들었다(ruby, css 코드까지 직접 건들긴 했으니까. 학교에서 들은 웹프로그래밍 수업이 없었다면 커스텀은 진작에 포기했을 것 같다). 또한 지금까지 해결하지 못한 문제도 있다. 꼭 필요한 것은 아니지만, 블로그에 분석 기능을 넣기 위해서, google analytics를 연동 하고 싶은데 아직까지도 실패했다. 이 문제를 해결한 경험 있는 분이 계시다면 댓글을 주셔도 되고, 이메일을 주셔도 좋으니 제발 도움을 주셨으면 좋겠다. 설정 파일도 만들고, 계정도 다시 파고, 별의 별 짓을 다하고 몇일 붙잡아도 되지 않는다. 매우 열받지만 꼭 필요한 기능은 아니니까 일단은 보류하기로 했다. 블로그로 돈버는건 아니니까.....

### 그래서 지금은?
어느 정도 설정을 하고, 모양을 갖추니, 이미 애정이 많이 들어버렸다. 어제는 블로그의 외형을 바꾸기 위해서 새벽까지 자지 못했는데, 노력한 만큼 확실히 애정이 빨리 든 것 같다. 마크다운으로 글을 작성하는 것도 익숙해져서 편하다. 하지만 한편에는 불안한 마음이 있다. "내가 설정한 기능이 잘 작동할까?"라는 생각이 계속해서 든다. 특히 google search console을 통한 노출이 잘 되는 것일까? 하는 생각이 든다. 지금까지 쓴 글이 6개인데 노출된 글은 하나이기 때문이다... 아직 작성한지 얼마 안되서 그런가싶기도 하고? 잘 모르겠다. 설정에 실패한 google analytics가 이런 불안감을 더 크게 만드는 것 같다(다시 한번 부탁드린다. 이 문제를 겪거나 해결하신 분은 댓글이나 이메일 부탁드린다. 저 절박해요...)  
어쨌든 열심히 블로그를 만든 김에 공부한 내용도 정리하고, 이 글처럼 생각을 정리하고 공유하는 글도 많이 쓰고 싶다. 이 글을 쓰면서 글을 쓰는 것은 꽤 재미있는 일이라고 오랬만에 느낀 것 같다.