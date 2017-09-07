package com.gms.web.util;

import java.util.*;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;

public class ParamsIterator {
	public static Map<?,?> execute(HttpServletRequest request){
		Map<String,String> result = new HashMap<>();
		Map<String,String[]> map = request.getParameterMap();
		Set<Entry<String, String[]>> set = map.entrySet();
		Iterator<Map.Entry<String, String[]>> it = set.iterator();
		String  params[] = new String[set.size()];
		System.out.println("set size"+set.size());
		
		int i=0;
		while(it.hasNext()){
			Map.Entry<String, String[]> e = it.next();
			params[i] = e.getKey();
			i++;
		}
		for(i=0;i<params.length;i++){
			if(map.get(params[i]).length==1){
				System.out.println("*"+map.get(params[i])[0]);
				result.put(params[i], map.get(params[i])[0]);
			}else{
				String temp="";
				for(int j=0;j<map.get(params[i]).length;j++){
					System.out.println("*"+map.get(params[i])[j]);
					temp+=map.get(params[i])[j]+",";
				}
				result.put(params[i], temp);
			}
		}
		return result;
	}
}
