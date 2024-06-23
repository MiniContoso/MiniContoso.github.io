import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as e}from"./app-DHNsKz1s.js";const t={},p=e(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>右键选择Run as administrator</p></div><h2 id="powershell版本" tabindex="-1"><a class="header-anchor" href="#powershell版本"><span>PowerShell版本</span></a></h2><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$PSVersionTable</span>

Name                           Value
<span class="token operator">--</span><span class="token operator">--</span>                           <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
PSVersion                      5<span class="token punctuation">.</span>1<span class="token punctuation">.</span>22621<span class="token punctuation">.</span>2506
PSEdition                      Desktop
PSCompatibleVersions           <span class="token punctuation">{</span>1<span class="token punctuation">.</span>0<span class="token punctuation">,</span> 2<span class="token punctuation">.</span>0<span class="token punctuation">,</span> 3<span class="token punctuation">.</span>0<span class="token punctuation">,</span> 4<span class="token punctuation">.</span>0<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
BuildVersion                   10<span class="token punctuation">.</span>0<span class="token punctuation">.</span>22621<span class="token punctuation">.</span>2506
CLRVersion                     4<span class="token punctuation">.</span>0<span class="token punctuation">.</span>30319<span class="token punctuation">.</span>42000
WSManStackVersion              3<span class="token punctuation">.</span>0
PSRemotingProtocolVersion      2<span class="token punctuation">.</span>3
SerializationVersion           1<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取powershell命令" tabindex="-1"><a class="header-anchor" href="#获取powershell命令"><span>获取PowerShell命令</span></a></h2><p>Get-Command</p><p>获取PowerShell命令</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>PowerShell命令类型</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Command</span> <span class="token punctuation">|</span> <span class="token function">Select-Object</span> CommandType <span class="token punctuation">|</span> <span class="token function">Sort-Object</span> CommandType <span class="token operator">-</span>Unique

CommandType
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
      Alias
   <span class="token keyword">Function</span>
     <span class="token keyword">Filter</span>
     Cmdlet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PowerShell命令数量</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Command</span> <span class="token punctuation">|</span> <span class="token function">Measure-Object</span>

Count    : 1756
Average  : 
Sum      : 
Maximum  : 
Minimum  : 
Property : 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="筛选powershell命令" tabindex="-1"><a class="header-anchor" href="#筛选powershell命令"><span>筛选PowerShell命令</span></a></h2><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token comment"># 获取动词为get的命令</span>
<span class="token function">Get-Command</span> <span class="token operator">-</span>Verb get

<span class="token comment"># 获取名词为service的命令</span>
<span class="token function">Get-Command</span> <span class="token operator">-</span>Noun service

<span class="token comment"># 获取动词为get，名词为service的命令</span>
<span class="token function">Get-Command</span> <span class="token operator">-</span>Verb get <span class="token operator">-</span>Noun service

CommandType     Name                                               Version    Source
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>     <span class="token operator">--</span><span class="token operator">--</span>                                               <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>    <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
Cmdlet          <span class="token function">Get-Service</span>                                        3<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0    Microsoft<span class="token punctuation">.</span>PowerShell<span class="token punctuation">.</span>Management

<span class="token comment"># 模糊查询computer相关命令</span>
<span class="token function">Get-Command</span> <span class="token operator">*</span>computer*

CommandType     Name                                               Version    Source
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>     <span class="token operator">--</span><span class="token operator">--</span>                                               <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>    <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
<span class="token keyword">Function</span>        <span class="token function">Get-MpComputerStatus</span>                               1<span class="token punctuation">.</span>0        ConfigDefender
<span class="token keyword">Function</span>        <span class="token function">Get-MpComputerStatus</span>                               1<span class="token punctuation">.</span>0        Defender
Cmdlet          <span class="token function">Add-Computer</span>                                       3<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0    Microsoft<span class="token punctuation">.</span>PowerShell<span class="token punctuation">.</span>Management
Cmdlet          <span class="token function">Checkpoint-Computer</span>                                3<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0    Microsoft<span class="token punctuation">.</span>PowerShell<span class="token punctuation">.</span>Management
Cmdlet          <span class="token function">Disable-ComputerRestore</span>                            3<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0    Microsoft<span class="token punctuation">.</span>PowerShell<span class="token punctuation">.</span>Management
Cmdlet          <span class="token function">Enable-ComputerRestore</span>                             3<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0    Microsoft<span class="token punctuation">.</span>PowerShell<span class="token punctuation">.</span>Management
Cmdlet          <span class="token function">Get-ComputerInfo</span>                                   3<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0    Microsoft<span class="token punctuation">.</span>PowerShell<span class="token punctuation">.</span>Management
Cmdlet          <span class="token function">Get-ComputerRestorePoint</span>                           3<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0    Microsoft<span class="token punctuation">.</span>PowerShell<span class="token punctuation">.</span>Management
Cmdlet          <span class="token function">Remove-Computer</span>                                    3<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0    Microsoft<span class="token punctuation">.</span>PowerShell<span class="token punctuation">.</span>Management
Cmdlet          <span class="token function">Rename-Computer</span>                                    3<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0    Microsoft<span class="token punctuation">.</span>PowerShell<span class="token punctuation">.</span>Management
Cmdlet          <span class="token function">Reset-ComputerMachinePassword</span>                      3<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0    Microsoft<span class="token punctuation">.</span>PowerShell<span class="token punctuation">.</span>Management
Cmdlet          <span class="token function">Restart-Computer</span>                                   3<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0    Microsoft<span class="token punctuation">.</span>PowerShell<span class="token punctuation">.</span>Management
Cmdlet          <span class="token function">Restore-Computer</span>                                   3<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0    Microsoft<span class="token punctuation">.</span>PowerShell<span class="token punctuation">.</span>Management
Cmdlet          <span class="token function">Set-LapsADComputerSelfPermission</span>                   1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0    LAPS
Cmdlet          <span class="token function">Stop-Computer</span>                                      3<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0    Microsoft<span class="token punctuation">.</span>PowerShell<span class="token punctuation">.</span>Management
Cmdlet          <span class="token function">Test-ComputerSecureChannel</span>                         3<span class="token punctuation">.</span>1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0    Microsoft<span class="token punctuation">.</span>PowerShell<span class="token punctuation">.</span>Management
Application     ComputerDefaults<span class="token punctuation">.</span>exe                               10<span class="token punctuation">.</span>0<span class="token punctuation">.</span>22<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> C:\\Windows\\system32\\ComputerDefaults<span class="token punctuation">.</span>exe        
Application     SystemPropertiesComputerName<span class="token punctuation">.</span>exe                   10<span class="token punctuation">.</span>0<span class="token punctuation">.</span>22<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> C:\\Windows\\system32\\SystemPropertiesComputerName<span class="token punctuation">.</span>exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用powershell帮助" tabindex="-1"><a class="header-anchor" href="#使用powershell帮助"><span>使用PowerShell帮助</span></a></h2><p>Get-Help</p><p>查询Get-Service命令的使用帮助</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Help</span> <span class="token operator">-</span>Name <span class="token function">Get-Service</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询Get-Service命令的使用帮助（包括使用案例）</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Help</span> <span class="token operator">-</span>Name <span class="token function">Get-Service</span> <span class="token operator">-</span>Examples
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>= 查询Get-Service命令的使用帮助（详细说明）</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Help</span> <span class="token operator">-</span>Name <span class="token function">Get-Service</span> <span class="token operator">-</span>Detailed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询Get-Service命令的使用帮助（在线）</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Help</span> <span class="token operator">-</span>Name <span class="token function">Get-Service</span> <span class="token operator">-</span>Online
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如何使用关于帮助</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Help</span> <span class="token operator">-</span>Name about*
<span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_Pipelines
<span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_Variables
<span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_Arrays
<span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_Hash_Tables
<span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_Parameters
<span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_Functions
<span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_Modules
<span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_Scripts
<span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_Execution_Policies
<span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_Foreach
<span class="token function">Get-Help</span> <span class="token operator">-</span>Name about_If
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新帮助</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Update-Help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Get-Help案例</p><p>Get-Help -Name Get-Service -Online</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token comment"># 使用方式一</span>
<span class="token function">Get-Service</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token operator">-</span>Name<span class="token punctuation">]</span> &lt;String<span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">]</span>
<span class="token comment"># 最外层和-Name 的[]表示可选项；&lt;String&gt;表示字符类型，后面的[]表示可以多个</span>
<span class="token comment"># Get-Service</span>
<span class="token comment"># Get-Service -Name WinRM, Spooler 或Get-Service WinRM, Spooler</span>
<span class="token punctuation">[</span><span class="token operator">-</span>ComputerName &lt;String<span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token operator">-</span>DependentServices<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token operator">-</span>RequiredServices<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token operator">-</span>Include &lt;String<span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token operator">-</span>Exclude &lt;String<span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">]</span>
<span class="token punctuation">[</span>&lt;CommonParameters&gt;<span class="token punctuation">]</span>

<span class="token comment"># 使用方式二</span>
<span class="token function">Get-Service</span>
<span class="token punctuation">[</span><span class="token operator">-</span>ComputerName &lt;String<span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token operator">-</span>DependentServices<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token operator">-</span>RequiredServices<span class="token punctuation">]</span>
<span class="token operator">-</span>DisplayName &lt;String<span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;
<span class="token punctuation">[</span><span class="token operator">-</span>Include &lt;String<span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token operator">-</span>Exclude &lt;String<span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">]</span>
<span class="token punctuation">[</span>&lt;CommonParameters&gt;<span class="token punctuation">]</span>

<span class="token comment"># 使用方式三</span>
<span class="token function">Get-Service</span>
<span class="token punctuation">[</span><span class="token operator">-</span>ComputerName &lt;String<span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token operator">-</span>DependentServices<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token operator">-</span>RequiredServices<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token operator">-</span>Include &lt;String<span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token operator">-</span>Exclude &lt;String<span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token operator">-</span>InputObject &lt;ServiceController<span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">]</span>
<span class="token punctuation">[</span>&lt;CommonParameters&gt;<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用powershell-注意" tabindex="-1"><a class="header-anchor" href="#使用powershell-注意"><span>使用PowerShell 注意</span></a></h2><p>PowerShell 很强大，同时也需要安全的使用：</p><p>Get-Service会获取本机上的所有服务的信息</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Service</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当我们不确定命令的功能时，可以使用参数-WhatIf</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-Service</span> <span class="token punctuation">|</span> <span class="token function">Stop-Service</span> <span class="token operator">-</span>WhatIf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,36),o=[p];function l(c,i){return a(),s("div",null,o)}const d=n(t,[["render",l],["__file","powershell.html.vue"]]),k=JSON.parse('{"path":"/powershell/powershell.html","title":"入门","lang":"zh-CN","frontmatter":{"title":"入门","icon":"terminal","order":1,"category":["powershell"],"tag":["powershell"],"description":"注意 右键选择Run as administrator PowerShell版本 获取PowerShell命令 Get-Command 获取PowerShell命令 PowerShell命令类型 PowerShell命令数量 筛选PowerShell命令 使用PowerShell帮助 Get-Help 查询Get-Service命令的使用帮助 查询Ge...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/powershell/powershell.html"}],["meta",{"property":"og:site_name","content":"minicontoso"}],["meta",{"property":"og:title","content":"入门"}],["meta",{"property":"og:description","content":"注意 右键选择Run as administrator PowerShell版本 获取PowerShell命令 Get-Command 获取PowerShell命令 PowerShell命令类型 PowerShell命令数量 筛选PowerShell命令 使用PowerShell帮助 Get-Help 查询Get-Service命令的使用帮助 查询Ge..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Echo"}],["meta",{"property":"article:tag","content":"powershell"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"入门\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Echo\\",\\"url\\":\\"https://www.minicontoso.com\\"}]}"]]},"headers":[{"level":2,"title":"PowerShell版本","slug":"powershell版本","link":"#powershell版本","children":[]},{"level":2,"title":"获取PowerShell命令","slug":"获取powershell命令","link":"#获取powershell命令","children":[]},{"level":2,"title":"筛选PowerShell命令","slug":"筛选powershell命令","link":"#筛选powershell命令","children":[]},{"level":2,"title":"使用PowerShell帮助","slug":"使用powershell帮助","link":"#使用powershell帮助","children":[]},{"level":2,"title":"使用PowerShell 注意","slug":"使用powershell-注意","link":"#使用powershell-注意","children":[]}],"git":{},"readingTime":{"minutes":1.96,"words":588},"filePathRelative":"powershell/powershell.md","autoDesc":true}');export{d as comp,k as data};