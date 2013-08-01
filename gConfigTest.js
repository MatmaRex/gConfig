gConfig.register('disFixer', 'disFixer', [
	{
		name: 'fixIfRedirsOnly',
		desc: 'Wyświetl przycisk także wtedy, gdy do poprawy są same przekierowania.',
		type: 'boolean',
		deflt: false,
		legacy: [window, 'disFixIfRedirsOnly']
	},
	{
		name: 'markAsMinor',
		desc: 'Oznacz zmiany jako małe.',
		type: 'boolean',
		deflt: false,
		legacy: [window, 'disMarkAsMinor']
	},
	{
		name: 'codeCleanup',
		desc: 'Automatycznie uruchom WP:SK po każdej zmianie.',
		type: 'boolean',
		deflt: false,
		legacy: [window, 'disCodeCleanup']
	},
	{
		name: 'useOldRedirFixing',
		desc: '[zaawansowane] Używaj starego sposobu rozwiązywania przekierowań.',
		type: 'boolean',
		deflt: false,
		legacy: [window, 'useOldRedirFixing']
	},
	{
		name: 'enforceCookies',
		desc: '[zaawansowane] Wymuś przechowywanie danych w ciasteczkach zamiast LocalStorage.',
		type: 'boolean',
		deflt: false,
		legacy: [window, 'disEnforceCookies']
	}
]);

gConfig.register(
	'lipsum',
	{
		name: 'Lorem ipsum gadget',
		descriptionPage: 'Wikipedia:Lorem ipsum gadget'
	},
	[
		{
			name: 'boolean',
			desc: 'Boolean value.',
			type: 'boolean',
			deflt: true
		}, {
			name: 'integer',
			desc: 'Integral number between 0 and 30.',
			type: 'integer',
			deflt: 20,
			validation: [0, 30]
		}, {
			name: 'float',
			desc: '[[Floating-point number]] between -1 and 1.',
			descMode: 'wikitext',
			type: 'numeric',
			deflt: 0.5,
			validation: [-1, 1]
		}, {
			name: 'string',
			desc: 'Text value.',
			type: 'string',
			deflt: 'test'
		}, {
			name: 'evenonly-passive',
			desc: 'Even numbers only. Will be rounded down if an odd number is given.',
			type: 'integer',
			deflt: 0,
			validation: function(n){ return n%2!=0 ? n-1 : n; }
		}, {
			name: 'evenonly-agressive',
			desc: 'Even numbers only. Will prevent saving if an odd number is given.',
			type: 'integer',
			deflt: 0,
			validation: function(n){ if(n%2!=0){ throw 'Requires an even number!' }; return n; }
		}
	]
);
