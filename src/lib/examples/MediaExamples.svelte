<script lang="ts">
    import Avatar from '$lib/comps/media/Avatar.svelte';

    const imgSrc = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
</script>

<div class="space-y-8">
    <div class="space-y-4">
        <h3 class="text-lg font-bold">Basic Avatars & Sizes</h3>
        <div class="flex gap-4 items-end">
            <Avatar src={imgSrc} size="32" />
            <Avatar src={imgSrc} size="24" />
            <Avatar src={imgSrc} size="20" />
            <Avatar src={imgSrc} size="16" />
            <Avatar src={imgSrc} size="12" />
            <Avatar src={imgSrc} size="8" />
        </div>
    </div>

    <div class="space-y-4">
        <h3 class="text-lg font-bold">Rounded Styles</h3>
        <div class="flex gap-4">
            <Avatar src={imgSrc} size="24" rounded />
            <Avatar src={imgSrc} size="24" roundedFull />
        </div>
    </div>

    <div class="space-y-4">
        <h3 class="text-lg font-bold">Mask Styles</h3>
        <div class="flex gap-4">
            <Avatar src={imgSrc} size="24" mask="squircle" />
            <Avatar src={imgSrc} size="24" mask="hexagon" />
            <Avatar src={imgSrc} size="24" mask="triangle" />
        </div>
    </div>

    <div class="space-y-4">
        <h3 class="text-lg font-bold">Avatar Group</h3>
        <Avatar group>
            <Avatar src={imgSrc} size="12" />
            <Avatar src={imgSrc} size="12" />
            <Avatar src={imgSrc} size="12" />
            <Avatar placeholder="+99" size="12" />
        </Avatar>
    </div>

    <div class="space-y-4">
        <h3 class="text-lg font-bold">Ring & Status</h3>
        <div class="flex gap-4">
            <Avatar src={imgSrc} size="24" ring />
            <Avatar src={imgSrc} size="24" status="online" roundedFull />
            <Avatar src={imgSrc} size="24" status="offline" roundedFull />
        </div>
    </div>

    <div class="space-y-4">
        <h3 class="text-lg font-bold">Placeholders</h3>
        <div class="flex gap-4">
            <Avatar placeholder="D" size="24" />
            <Avatar placeholder="AI" size="16" status="online" />
            <Avatar placeholder="SY" size="12" />
            <Avatar placeholder="UI" size="8" />
        </div>
    </div>
</div>
