//-------------------------------------------
// THIS IS NOT A PART OF THE PLUGIN. 
// ONLY FOR THE DEMO.
//-------------------------------------------
!(function(){
    'use strict';

	var numOfImages = 0,
		gallery = $('#gallery'),
		photos = [
			{
				title: "Kochaj zwierzęta!",
				url: "https://lh3.googleusercontent.com/pw/AL9nZEVR3RXozOQNnyZePMDmCiTIs-Mj-MK9d6Iyd4rZguNIRke4QzqGRPpGhpzzX8yNFjQS03w-3TZ7G0RXhKaLTdXJVav3JTQmt4JmnixG0TYl9Fw3k6p-M96tBPAHK-5cTRFjV9mvmOr-AaA9alqgep1flw=w614-h1329-no?authuser=0",
				isVideo: false
			},
			{
				title: "Chcę wrócić na Malediwy!",
				url: "https://lh3.googleusercontent.com/pw/AL9nZEW74yffedws4hbLlLgL_b5jhI3meQi443suZZB7kVnUq4fB9UvpimdZkDQE4UCV7ubi7i2q6SYRNiqb_0BAxiN052xR1RCmoU-iyEOsfK8b4Iw23D6jQ4qCzlXH9bspPZBQNX5vyGl_kgMPhdHor2x4rw=w997-h1329-no?authuser=0",
				isVideo: false,
			},
			{
				title: "Wyznaczaj sobie wysokie cele!",
				url: "https://lh3.googleusercontent.com/pw/AL9nZEXu09lrc9LJ_hGwbfSqmcR8q-CB9vNqWO0jPvYD_mUKv4vwh2dkSHihupqIr8PVWXOjqdxNZSipy9APCRWw2_VxnoxcyOz0M6j_y5LNJdeTmtNHZwYrG1-smkWZC7fMkpG6C6K-5m8DKGPUfMeHQJcQWQ=w995-h1329-no?authuser=0",
				isVideo: false,
			},
			{
				title: "Kochaj alpaki!",
				url: "https://lh3.googleusercontent.com/pw/AL9nZEVbujCCetGgAcVMJ8Nv0pUvu1qIQ7cm3KZugXNyxiNGRQrHlDFKdc-_qcTfOpVvX_gqG7J0AaySlvXWgb4lb4aspk41oLKnh-PyV8oNpR_ByV0L3Y2lnDqQm6Fpsu4U7lobQRFjq3urVF0WwiYYcuNTSQ=w748-h1329-no?authuser=0",
				isVideo: false,
			},
			{
				title: "Płacz czasami",
				url: "https://lh3.googleusercontent.com/pw/AL9nZEWQ9pEEaGS0N8QW3CNH0lkFKRiSod4YZjtweaGZftJZwcHZnTRnz5VElpWjBWjlEAEuE_11yC05f69ODxOLchucGexvTFockdhQ99BMiCINyxN0dfMHywxHTNtkDqBvcURf_9sKAdj8bZhF35Vd4Jv4uA=w748-h1329-no?authuser=0",
				isVideo: false,
			},
			{
				title: "Jedz lody",
				url: "https://lh3.googleusercontent.com/pw/AL9nZEVblcE4ttM9n9tX8cZidUXkoSn2D1TUWA9rnE3JH4tFw8jxEo-BJpH2aF83kVSDlPvcpoBMTdNBlYahhUmX5GWQxYDwRbqpa5SE1k23CaLutXdBfrvkvrD0OBY6p_OOxHrf7EKz9SdARoVsDb3qyh7qNw=w995-h1329-no?authuser=0",
				isVideo: false,
			},
			{
				title: "Dużo śnij!",
				url: "https://lh3.googleusercontent.com/pw/AL9nZEXs0nQ4hhW-FB8v13xxn8GOybmmmTqLAEjTsqP7-4NLniO317aTDub3-j6erAK2IxFi0I-3vuhbXvNR53-Ms-ocV9DnLDokXaEG65uoJ367s7iuGDyxv6i5PlpeEjoLQSsPwlyJBJceFDeHvBFybHv-Cw=w997-h1329-no?authuser=0",
				isVideo: false,
			},
			{
				title: "Bądź piękna!",
				url: "https://lh3.googleusercontent.com/pw/AL9nZEWCI3DG1adS0rXo-YrYpScRQH6hjPthzm-v_d13WskolMtFlR_1y0a0PF9qQzWN_8-TwJyzGuKFhyDGirk5mz00mSCMZOc0oPYoFB06kb_ruH1h-zuDIgrpwiMif99o-U7pdyBiJFt1Ux0fH-lg2mKvvg=w998-h1329-no?authuser=0",
				isVideo: false,
			},
			{
				title: "Zadbaj o swoich bliskich!",
				url: "https://lh3.googleusercontent.com/pw/AL9nZEUnxFzn5gjfpvKA5SJ89GD2KcF9YIQ42kSza68Y4GAwjw5Dtvbb2fZqAo9MUdOi7ToUwo1d68LCdGQCmaNuBUT6gvypaqcy_1g6bk6DDW8mZdAPeb-Hhutp5fvkV1L4E02flNtKDL0G3F0zlfsJvUzHOQ=w998-h1329-no?authuser=0",
				isVideo: false,
			},
			{
				title: "Nie zapomnij o sporcie!",
				url: "https://lh3.googleusercontent.com/pw/AL9nZEVeBOdVKbMopQJ5ewAwwHCOhN8oZSH2fe8qoMA21tHMOgxQ3PQdGyvcHGzC4gAI35sN6bAGII9lpddQREXAJ4zqsXJvKjDCua3AgPeWvLAfoBJHmR4ppQQdlcVtzMRG5uFng5QBTDIQ7kggP9IaUhWhPQ=w614-h1329-no?authuser=0",
				isVideo: false,
			},
			{
				title: "Spacerować",
				url: "https://lh3.googleusercontent.com/pw/AL9nZEV77fsW_kLzUKY20shtpu4vGV7MbLOJFlJoy84NTS7i8pmHvbmQ-IYLLeii7jk950f-NWkde_AehDt844JtmozWRz2sJCdhmnKs75fFCUcX16dO3so-oBu79qwl1CtFxb4JqSJFq7HB16Co2XQrDLhfxw=w998-h1329-no?authuser=0",
				isVideo: false,
			},
			{
				title: "Komunikuj się ze mną, nawet gdy jesteśmy daleko!",
				url: "https://lh3.googleusercontent.com/pw/AL9nZEVRxYeP8NeOpg_zJ5uRtV-z1UDzhev1G4H03_fKxOfBR8CChBZ_njEKgh_RGGvpUAeD_bhDdVVUnYBXXxA0iJftcweRUzWwlzQWFQciZJuaPqkCIhM4VitjRQ7fiwei3U5TCbI1DfT0y3m8ouVLNXHiVA=w591-h1280-no?authuser=0",
				isVideo: false,
			}
		];

        var loadedIndex = 1, isVideo;
		
        $.each( photos, function(index, photo){
			isVideo = photo.isVideo;
            var img = document.createElement('img');
			
			// lazy show the photos one by one
			img.onload = function(e){
				img.onload = null;
//				var link = document.createElement('a'),
//				li = document.createElement('li')
//				link.href = this.largeUrl;
//
//				link.appendChild(this);
//				if( this.isVideo ){
//					link.rel = 'video';
//					li.className = 'video'
//				}
//				li.appendChild(link);

//			  setTimeout( function(){
////				gallery[0].appendChild(li);
//
//				setTimeout( function(){
//					$(li).addClass('loaded');
//				}, 50*loadedIndex++);
//              }, 250*index);
			};
			
			img['largeUrl'] = photo.url;
			img['isVideo'] = photo.isVideo;
			img.src = photo.url;
			img.title = photo.title;

            var link = document.createElement('a'),
            li = document.createElement('li')
            link.href = photo.url;

            link.appendChild(img);
            if( photo.isVideo ){
                link.rel = 'video';
                li.className = 'video'
            }
            li.appendChild(link);
            gallery[0].appendChild(li);
//            setTimeout( function(){
                $(li).addClass('loaded');
//            }, 2500);

        });

		// finally, initialize photobox on all retrieved images
		$('#gallery').photobox('a', { thumbs:true }, callback);
		// using setTimeout to make sure all images were in the DOM, before the history.load() function is looking them up to match the url hash
		setTimeout(window._photobox.history.load, 1000);
		function callback(){
			console.log('callback for loaded content:', this);
		};

})();