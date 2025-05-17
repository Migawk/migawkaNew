<script setup lang="ts">
const { pr } = defineProps<{ pr: IProj }>();
</script>
<template>
	<div class="project">
		<a :href="pr.link">
			<img :src="pr.img" class="projectImg" id="portfImg" />
		</a>
		<div class="projectResponsive">
			<div class="projectHiddenTitle">{{ pr.name }}</div>
			<ul class="projectInfo">
				<li class="projectStack" v-for="st in pr.stack">
					<img :src="st.img" :alt="st.name" width="16">
					<p class="projectStackText">{{ st.name }}</p>
				</li>
			</ul>
		</div>
		<div class="projectContent">
			<div class="projectTitle">{{ pr.name }}</div>
			<div class="projectDescription">
				{{ pr.des }}
			</div>
		</div>
	</div>
</template>
<style scoped lang="sass">
.project
  display: flex
  flex-direction: column
  gap: 48px
  height: 100%
  &Img
    border-radius: 12px
    object-fit: cover
    width: 100%
  &Info
    display: flex
    padding: 12px 24px
    gap: 32px

    background: #46546C
    color: #fff

    font-size: 24px
    font-weight: 700

    border-radius: 12px
    & > *:first-child
      list-style-type: none
  &Stack
    list-style-type: circle
    display: flex
    justify-content: center
    align-items: center
    gap: 8px
    &Text
      font-size: 16px
      transform: translateY(-1px)
  &Content
    font-weight: 700
    color: #fff
  &HiddenTitle
    display: none
    color: #fff
    font-size: 36px
    padding: 10px 8px
  &Title
    font-size: 36px
  &Description
    font-size: 24px
  &Rating>.stars
    display: flex
    align-items: center
    justify-content: center
    gap: 4px

@media screen and (max-width: 600px)
  .project
    background: #2E3850
    border-radius: 12px
    width: fit-content
    overflow: hidden
    gap: 0
    &Img
      border-radius: 0
      width: 100%
    &Info
      display: flex
      justify-content: center
    &Rating
      border-radius: 0
      border-bottom-left-radius: 12px
      border-bottom-right-radius: 12px
      background: #3A475E
    &Responsive
      background: #46546C
      border-bottom-left-radius: 12px
      border-bottom-right-radius: 12px
    &HiddenTitle
      display: block
      font-weight: 700
      text-align: center
    &Title
      display: none
    &Description
      padding: 8px
      font-size: 18px
      text-align: center
  .projectWrappedList
    padding: 0

</style>