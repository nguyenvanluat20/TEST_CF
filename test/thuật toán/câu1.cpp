#include<bits/stdc++.h>

using namespace std;

int main(){
	int n,m;
	cout << "nhap so phan tu cua a "; cin >> n;
	string a[n];
	cout << "nhap so phan tu cua b "; cin >> m;
	string b[m];
	map<string,int> c;
	vector<string> d;
	for(int i = 0; i<n; i++) {
	cin >> a[i]; c[a[i]]++;}
	
	for(int i = 0; i<m; i++) {
	cin >> b[i]; c[b[i]]++;}
	
	for(int i = 0; i<n; i++){
		if(c[a[i]] == 1) d.push_back(a[i]);
	}
	for(int i = 0; i<m; i++){
		if(c[b[i]] == 1) d.push_back(b[i]);
	}
	for(int i = 0; i<d.size(); i++){
		cout << d[i] << " ";
	}
	cout << endl;
	
	
	
}
