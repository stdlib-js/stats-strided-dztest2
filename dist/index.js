"use strict";var R=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(c){throw e=0,c}}};var E=R(function(vr,_){"use strict";var B=require("@stdlib/stats-base-ztest-alternative-resolve-str"),j=require("@stdlib/math-base-assert-is-nan"),G=require("@stdlib/stats-base-dists-normal-quantile").factory,H=require("@stdlib/stats-base-dists-normal-cdf").factory,S=require("@stdlib/stats-strided-dmean").ndarray,J=require("@stdlib/math-base-special-sqrt"),L=require("@stdlib/math-base-special-abs"),M=require("@stdlib/array-float64"),T=require("@stdlib/constants-float64-pinf"),U=require("@stdlib/constants-float64-ninf"),A=H(0,1),C=G(0,1),v=new M(2);function Z(t,e,c,a,n,q,x,d,V,l,m,z,k,r){var N,u,F,p,O,P,i,y,s;return y=B(c),t<=0||e<=0||j(a)||j(n)||j(q)||j(l)||q<=0||l<=0||a<0||a>1?(v[0]=NaN,v[1]=NaN,r.rejected=!1,r.alternative=y,r.alpha=NaN,r.pValue=NaN,r.statistic=NaN,r.ci=v,r.nullValue=NaN,r.xmean=NaN,r.ymean=NaN,r):(O=q*q,P=l*l,u=J(O/t+P/e),F=S(t,x,d,V),p=S(e,m,z,k),i=(F-p-n)/u,y==="less"?(N=A(i),s=C(1-a),v[0]=U,v[1]=n+(i+s)*u):y==="greater"?(N=1-A(i),s=C(1-a),v[0]=n+(i-s)*u,v[1]=T):(N=2*A(-L(i)),s=C(1-a/2),v[0]=n+(i-s)*u,v[1]=n+(i+s)*u),r.rejected=N<=a,r.alpha=a,r.pValue=N,r.statistic=i,r.ci=v,r.alternative=y,r.nullValue=n,r.xmean=F,r.ymean=p,r)}_.exports=Z});var D=R(function(nr,w){"use strict";var b=require("@stdlib/strided-base-stride2offset"),$=E();function o(t,e,c,a,n,q,x,d,V,l,m,z){return $(t,e,c,a,n,q,x,d,b(t,d),V,l,m,b(e,m),z)}w.exports=o});var W=R(function(ir,Q){"use strict";var X=require("@stdlib/utils-define-nonenumerable-read-only-property"),K=D(),Y=E();X(K,"ndarray",Y);Q.exports=K});var g=require("path").join,h=require("@stdlib/utils-try-require"),rr=require("@stdlib/assert-is-error"),er=W(),I,f=h(g(__dirname,"./native.js"));rr(f)?I=er:I=f;module.exports=I;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
