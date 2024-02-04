<h2>CRUD: Establishment and Principles</h2>

<p>It's time to dive into CRUD by better understanding RESTful architecture. CRUD is an acronym for:</p>

<ul>
	<li>CREATE</li>
	<li>READ</li>
	<li>UPDATE</li>
	<li>DELETE</li>
</ul>

<p>These create the standard database commands that form the basis of CRUD. Many software developers see these commands as primitive guidance at best. This is because CRUD was not developed as a modern way to create APIs. In fact, the origins of CRUD are in database records.</p>

<p>As a definition, CRUD is more of a loop than an architectural system. In any dynamic website, there are likely multiple CRUD loops. For example, a buyer on an e-commerce site can create an account (<strong>CREATE</strong>), update account information (<strong>UPDATE</strong>), and delete things in a shopping cart (<strong>DELETE</strong>).</p>

<p>A Depot Operations Manager using the same site can create shipping records (<strong>CREATE</strong>), retrieve them when needed (<strong>RETRIEVE</strong>), and update supply lists (<strong>UPDATE</strong>). The retrieval process sometimes replaces reading (<strong>READ</strong>) in the CRUD loop.</p>

<h3>Database Origins</h3>

<p>The CRUD loop was designed as a functional method to improve permanent storage with a record database. As the name suggests, permanent storage is longer-lived than the operations that create it. These functions include all the features of a relational database application.</p>

<p>In modern software development, CRUD has surpassed its origins as the basic functions of a database and now aligns itself with design principles for dynamic applications such as HTTP protocol, DDS, and SQL.</p>

<p>CRUD Principles</p>

<p>As mentioned above, the principles of the CRUD loop are defined as CREATE, READ/RETRIEVE, UPDATE, and DELETE:</p>

<ul>
	<li><strong>CREATE</strong>&nbsp;procedures generate new records through INSERT statements.</li>
	<li><strong>READ</strong>&nbsp;procedures read data based on input parameters. Similarly, <strong>RETRIEVE</strong>&nbsp;procedures retrieve records based on input parameters.</li>
	<li><strong>UPDATE</strong>&nbsp;procedures modify records without overwriting them.</li>
	<li><strong>DELETE</strong>&nbsp;procedures delete at the specified location.</li>
</ul>

<h2>&nbsp;</h2>

<h2>REST &amp; CRUD Similarities</h2>

<p>If you look at the two as we described above, it can be difficult to understand why they are often treated the same:</p>

<ul>
	<li>REST is a robust API architecture.</li>
	<li>CRUD is a loop to keep records up-to-date and permanent.</li>
</ul>

<p>The lack of clarity between the two is lost for most people when they cannot determine when CRUD ends and REST begins. CRUD can be matched with DDS, SQL, and HTTP protocols. These HTTP protocols are the links between resources in RESTful architecture, which is a fundamental part of REST.</p>

<p>Mapping CRUD principles to REST means understanding that GET, PUT, POST, and CREATE, READ, UPDATE, DELETE have striking similarities because the latter group applies the principles of the former.</p>

<p>However, it is also important to note that a RESTful software architecture is more than just mapping GET, PUT, and POST commands. It is a hypermedia-centric architectural system for resources through HTTP protocols.</p>

<table border="1" cellpadding="1" cellspacing="1" style="width:600px">
	<tbody>
		<tr>
			<td><strong>CRUD</strong></td>
			<td><strong>SQL</strong></td>
			<td><strong>HTTP</strong></td>
			<td><strong>DESCRIPTION</strong></td>
		</tr>
		<tr>
			<td>CREATE</td>
			<td>INSERT</td>
			<td>POST/PUT</td>
			<td>Add one or more new entries</td>
		</tr>
		<tr>
			<td>READ</td>
			<td>SELECT</td>
			<td>GET</td>
			<td>Retrieve matching entries based on specific criteria (if any)</td>
		</tr>
		<tr>
			<td>UPDATE</td>
			<td>UPDATE</td>
			<td>PUT/POST/PATCH</td>
			<td>Change specific fields in existing entries</td>
		</tr>
		<tr>
			<td>DELETE</td>
			<td>DELETE</td>
			<td>DELETE</td>
			<td>Completely remove one or more existing entries</td>
		</tr>
	</tbody>
</table>

<h2>REST vs CRUD: Differences?</h2>

<p>CRUD is a loop that is designed to be associated with REST by design. Persistence, as defined in the context of CRUD, is a smart way for applications to reduce operational commands between clients and services.</p>

<p>However, REST manages much more than persistence within architectural principles. Here are some ways in which REST differs from CRUD:</p>

<ul>
	<li>REST is a hypermedia-centric architectural system for resources through HTTP protocols.</li>
	<li>CRUD is a loop designed to keep permanent records in a database environment.</li>
	<li>CRUD principles are mapped to REST commands to comply with RESTful architecture goals.</li>
</ul>

<p>REST:</p>

<ul>
	<li>Representations must be uniform with respect to resources</li>
	<li>Hypermedia represents relationships between resources</li>
	<li>One entry point to an API, then a bridge to create relationships</li>
</ul>
