interface searchEngineSyntax{
	gakusanCom: {
		url: {
			baseurl:string,
			query:{
				publisher:string,
				minYear:string,
				maxYear:string,
				series:string,
				isbn:string,
				offset:string
			}
		},
		html:{
			totalCount: {
			query: string
		},
		book:{
			"articleQuery":string,
			
		}
	}
	}
}